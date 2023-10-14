let dataProject =[]

function addData(event){
    event.preventDefault();
    let title = document.getElementById("title").value
    let description = document.getElementById("Description").value
    let image = document.getElementById("image").files


    //let durai
    let startDate = document.getElementById("start-date").value
    let endDate = document.getElementById("end-date").value

    let startDateValue =new Date (startDate);
    let endDateValue = new Date(endDate);

    let durasiWaktu = endDateValue.getTime() - startDateValue.getTime();
    let durasiHari = durasiWaktu / ( 1000 * 3600 * 24);
    let durasiMinggu = Math.floor(durasiHari / 7 );
    let durasiBulan = Math.floor (durasiHari / 30);
    let durasiProject = "";

    if (durasiHari <= 6){
        durasiProject = "Durasi" + " " + durasiHari + " " + "Hari";
    }else if (durasiMinggu <= 3){
        durasiProject = "Durasi" + " " + durasiMinggu + " " + "Minggu";
    }else if ( durasiBulan >= 1){
        durasiProject ="Durasi" + " " + durasiBulan + " " + "Bulan" ;
    }

    //icon
    const nodeJs = `<img src="/image/node.png" alt="" />`;
    const nextJs = `<img src="/image/nextjs.png" alt="" />`;
    const reactJs = ` <img src="/image/react.png" alt="" />`;
    const typeScript = `<img src="/image/type.png" alt="" />`;




    //cek kondisi
    let getIcon1 = document.getElementById("node").checked
     ? nodeJs : "";
    let getIcon2 = document.getElementById("react").checked
     ? nextJs : "";

    let getIcon3 = document.getElementById("next").checked 
    ? reactJs : "";
    let getIcon4 = document.getElementById("type").checked
    ? typeScript : "";


    image =URL.createObjectURL(image[0])
    let project ={
        title,
        startDate,
        endDate,
        description,
        image,
        durasiProject,
        getIcon1,
        getIcon2,
        getIcon3,
        getIcon4,
        postAt : new Date(),
        author : "Arkanul Adelis",

    };
    dataProject.push(project);
    console.log(dataProject)

    renderProject();

}

function renderProject(){
    document.getElementById("contents").innerHTML ="";

    for (let index = 0; index < dataProject.length; index ++){
        console.log(dataProject[index]);

        document.getElementById("contents").innerHTML += `
        <div  d-flex justify-content-center mt-3 " id="contents">
            <div class="d-flex ">
                    <div class="card pt-3 pb-0 ps-3 pe-3 bg-light shadow  mb-5 bg-body-tertiary rounded" style="width: 18rem;">
                        <img src="${dataProject[index].image}" class="rounded" alt="...">
                       <div class="card-body">
                           <h5 > <a class="text-decoration-none text-dark" href="">${dataProject[index].title}</a> </h5>
                           <p style="font-size: 11px;" class=" fw-lighter">${getFultime(dataProject[index].postAt )} | ${dataProject[index].durasiProject} | ${dataProject[index].author} | ${getDinstanceTime(dataProject[index].postAt)}</p>
                           <p class="card-text">${dataProject[index].description}</p>
                           <div style="display:flex ;
                                        margin-bottom:10px ;                                       
                                        font-size: 20px;
                                        width: 30px;
                                        height: 30px;" class="icon">
                                        ${dataProject[index].getIcon1}
                                        ${dataProject[index].getIcon2}
                                        ${dataProject[index].getIcon3}
                                        ${dataProject[index].getIcon4}
                            </div>
                            <div class="d-flex justify-content-center pt-3">
                                <button class="px-5 bg-dark text-light fw-bold" type="button" class="btn btn-dark">Hapus</button>
                                <button class="px-5 ms-2 bg-dark text-light fw-bold" type="button" class="btn btn-dark">Edit</button>
                            </div>
                       </div>
                   </div>
            </div> 
        </div>  
        `
    }
}
function getFultime(time) {
    // let time = new Date ();
    // console.log(time)


    let monthName =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "jul", "Aug", "Sep", "Oct", "Nov", "Des"];
    // console.log(monthName[4])

    let date = time.getDate();
    console.log(date)

    let monthIndex = time.getMonth();
    console.log(monthName[monthIndex])

    let year = time.getFullYear();
    console.log(year)

    let hours = time.getHours();
    let minutes = time.getMinutes();
    
    if (hours <= 9){
        hours ="0" + hours
    }else if (minutes <= 9){
        minutes = "0" + minutes
    }

    console.log(`${hours}:${minutes}`)

    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
} 

function getDinstanceTime (time){
    let timeNew = new Date ();
    let timePost = time

    let distance = timeNew - timePost;
    console.log(distance)

    let miliSecond = 1000 ; // 1000 milisecond = satu detik
    let secondInHours = 3600 ; // 3600 detik = satu jam
    let hoursInDays = 24 ; // 24 ja = satu hari

    let distanceDay = Math.floor( distance / (miliSecond * secondInHours * hoursInDays ));
    let distanceHours = Math.floor ( distance / ( miliSecond * 60 * 60 ));
    let distanceMinutes = Math.floor ( distance / ( miliSecond * 60));
    let distanceSecond = Math.floor ( distance / ( miliSecond));


    if (distanceDay > 0){
        return `${distanceDay} day ago`
    }else if ( distanceHours > 0 ){
        return `${distanceHours} hour ago`
    }else if ( distanceMinutes > 0){
        return `${distanceMinutes} minutes ago`
    }else{
        return `${distanceSecond} second ago`
    }
}

setInterval(function () {
    renderProject()
}, 300000)