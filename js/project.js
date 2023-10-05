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
    let start_date = document.getElementById("input-start-date").value
    let end_date = document.getElementById("input-end-date").value
    let description = document.getElementById("input-description").value
    let image = document.getElementById("input-image").files
    let getIcon1 = document.getElementById('node')
    let getIcon2 = document.getElementById('react')
    let getIcon3 = document.getElementById('next')
    let getIcon4 = document.getElementById('type')
    
    var printIcon = ""

    if(getIcon1.checked == true){
        printIcon += '<img value="node" id="node" src="img/node.png" alt="">'
    }

    if(getIcon2.checked == true){
        printIcon += '<img value="react" id="react" src="img/react.png" alt="">'
    }

    if(getIcon3.checked == true){
        printIcon += '<img value="next" id="next" src="img/next.png" alt="">'
    }

    if(getIcon4.checked == true){
        printIcon += '<img value="type" id="type" src="img/type.png" alt="">'
    }
    

    image = URL.createObjectURL(image[0])
    // console.log(image)

    let project ={
        Project_name,
        start_date,
        end_date,
        description,
        image,
        printIcon,
        postAt : "04 Oktober 2023",
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
                       <p>${dataProject[index].start_date} | ${dataProject[index].author}</p> 
                    </div>   
                    
                    <p>
                        ${dataProject[index].description}
                    </p>
                    
                </div>
                <div class="icon">
                ${dataProject[index].printIcon}
                </div>

                <div class="kelas5">
                    <button>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </div>
        `
    }
}