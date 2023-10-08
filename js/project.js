// let dataSiswa = [
//     {
//         Nama : "Arkanul Adelis",
//         Alamat : "Cicurug Sukabumi",
//         Pendidikan : "Universitas Amik cbi",
//     },
//     {
//         Nama : " Ripki Albanani",
//         Alamat : " Bogor",
//         Pendidikan :"MTS Assaadah",
//     },
//     {
//         Nama :"Asep",
//         Alamat : " Depok",
//         Pendidikan : " SMK Informatika",
//     },
//     {
//         Nama :" Ujang",
//         alamat : "Jakarta",
//         Pendidikan : "SD",
//     },
// ]
// console.log(dataSiswa)
// console.log(dataSiswa[2])
// console.log(dataSiswa[3].Nama)

// let data =[]

// function addData (e){
//     e.preventDefault();


//     let project ={
//         project_name : document.getElementById("input-name-project").value,
//         start_date : document.getElementById("input-start-date").value,
//         end_date : document.getElementById("input-end-date").value,
//         description : document.getElementById("input-description").value,
//         node : document.getElementById("node").value,
//         image : document.getElementById("input-image").files
        // image = URL.createObjectURL(image[0])
//     };
//     data.push(project)
//     for(let index =0; index < addData.length; index ++ ){
//         console.log(data)
//     }
// }
    
    
    // let 
    // let next = document.getElementById("next").value
    // let react = document.getElementById("react").value
    // let type = document.getElementById("type").value

    
    // console.log(image)
    // data.push(project);
    // let project ={
    //     project_name,
    //     start_date,
    //     end_date,
    //     description,
    //     image,


let dataProject = []

function addData (event) {
    event.preventDefault();
    let Project_name = document.getElementById("input-name-project").value
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-image").files


    //durasi
    let start_date = document.getElementById("input-start-date").value
    let end_date = document.getElementById("input-end-date").value
    // let durasi = document.getElementById("durasi").value
   
    let startDateValue = new Date(start_date);
    let endDateValue = new Date (end_date);
    

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

    // let durasiDetail = durasiProject
    // let rentang = document.getElementById("durasi").value
    // ? durasiDetail : "";
    
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
    
    // var printIcon = ""

    // if(getIcon1.checked == true){
    //     printIcon += '<img value="node" id="node" src="img/node.png" alt="">'
    // }

    // if(getIcon2.checked == true){
    //     printIcon += '<img value="react" id="react" src="img/react.png" alt="">'
    // }

    // if(getIcon3.checked == true){
    //     printIcon += '<img value="next" id="next" src="img/next.png" alt="">'
    // }

    // if(getIcon4.checked == true){
    //     printIcon += '<img value="type" id="type" src="img/type.png" alt="">'
    // }
    

    image = URL.createObjectURL(image[0])
    // console.log(image)

    let project ={
        Project_name,
        start_date,
        end_date,
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

function renderProject (){
    document.getElementById("contents").innerHTML ="";

    for (let index = 0; index < dataProject.length; index ++ ){
        console.log(dataProject[index])
decodeURI
        document.getElementById("contents").innerHTML += `
        <div id="contents" class="kelas1">
            <div class="kelas2">
                <div class="kelas3">
                    <img src="${dataProject[index].image}" alt="">
                </div>
                <div>
                    <h1>
                        <a href="project-detail.html">${dataProject[index].Project_name}</a>
                    </h1>
                    <div class="kelas4">
                       <p>${getFultime(dataProject[index].postAt )} | ${dataProject[index].durasiProject} | ${dataProject[index].author} | ${getDinstanceTime(dataProject[index].postAt)}</p> 
                    </div>   
                    <p>
                        ${dataProject[index].description}
                    </p>
                    
              </div>
                <div style="margin-top: 10px;" class="icon">
                    ${dataProject[index].getIcon1}
                    ${dataProject[index].getIcon2}
                    ${dataProject[index].getIcon3}
                    ${dataProject[index].getIcon4}
                </div>

                <div class="kelas5">
                    <div class="btn-left">
                        <button>Delete</button>
                    </div>
                    <div class="btn-right">
                        <button>Edit</button>
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