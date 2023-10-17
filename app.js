const { count, time } = require("console");
const express = require ("express")
const path = require ("path");
const { title } = require("process");
const app = express()
const port = 5000

app.set("view engine", "hbs");
app.set("views", path.join (__dirname, "src/view"));

//set stastic file server
app.use(express.static("src/assets"))

// parsing data from client
app.use(express.urlencoded({extended: false}))

//routing
app.get("/home",home)
app.get("/upload-project", project)
app.post("/upload-project", submit) 
app.get("/delete-project/:id", hapus )
app.get("/testimonial",testi)
app.get("/contact", contact)
app.get("/detail-post/:id", post)




//local server
app.listen(port, () => {
    console.log("server running on port 5000");
});

//data dummy
const projects =[ 
    {
        title : "Bahasa pemograman terebaru , yang akan bumming di masa depan",
        startDate : "17 November 2023",
        enddate : "25 Agustus 2026",
        author : "Arkanul Adelis",
        Description : "Some quick example text to build on the card title and make up the bulk of the card's content",
        Technologies : ["node js", "next js", "react", "type script"]
    },
    {
        title : "Bahasa pemograman terebaru , yang akan bumming di masa depan",
        startDate : "17 November 2023",
        enddate : "25 Agustus 2026",
        author : "Arkanul Adelis",
        Description : "Some quick example text to build on the card title and make up the bulk of the card's content",
        Technologies : ["node js", "next js", "react", "type script"]
        
    },
]
function home (req, res){
    res.render("index", {projects});
}
function project (req, res){
    res.render("upload-project")
}
function testi (req, res){
    res.render ("testimonial")
}
function contact (req, res){
    res.render("kontak")
}
function post (req, res){
    const {id} = req.params
    console.log(id);
    res.render("project-detail", {projects})
}

function submit (req, res){
    let {
        "title": title,
        "start-date" : startDate,
        "end-date": endDate,
        "Technologies": Technologies,
        "Description":Description,
    } = req.body;
    console.log();
    console.log("title", "startDate", "endDate", "Technologies", "Description");

    //durasi
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
    //  let getIcon1 = Technologies.checked
    //   ? nodeJs : "";
    //  let getIcon2 = Technologies.checked
    //   ? nextJs : "";
 
    //  let getIcon3 = Technologies.checked 
    //  ? reactJs : "";
    //  let getIcon4 =Technologies.checked
    //  ? typeScript : "";

    const data = {
        title,
        startDate,
        endDate,
        durasiProject,
        Description,
        // getIcon1,
        // getIcon2,
        // getIcon3,
        // getIcon4,
        postAt : new Date(),
        author : "Arkanul Adelis",
    }

    projects.unshift(data)
    console.log(projects);
    console.log(req.body);

    res.redirect("/home")
};

function hapus (req, res){
    const { id } = req.params
    projects.splice(id, 1);
    res.redirect("/home")
    console.log(id);
    
}


//edit projet
app.get("/project/edit/:id", (req, res) => {
    const { id } = req.params
    const blog = projects.filter((blog) => blog.id == id)[0]
  
    res.render("edit-project", { layout: "edit-project", active: { Blog: true }, blog })
  })

//   router.post("/project/edit/:id", (req, res) => {
//     const { id } = req.params
//     const { title, content, image } = req.body
//     projects[id] = {
//       id: id,
//       title,
//       startDate,
//       enddate,
//       durasiProject,
//       Description,
//       Technologies,
//       postedAt: moment().format("Do MMM YY"),
//       author: "Patrick",
//     }
  
//     console.log(blogs)
//     res.redirect("/home")
//   })