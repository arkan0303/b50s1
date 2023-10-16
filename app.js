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
app.get("/testimonial",testi)
app.get("/contact", contact)
app.get("/detail-post", post)




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
    }
]
function home (req, res){
    res.render("index", {projects});
}
function project (req, res){
    res.render("upload-project")
}
function testi (req, res){
    res.render("testimonial")
}
function contact (req, res){
    res.render("kontak")
}
function post (req, res){
    res.render("project-detail")
}

function submit (req, res){
    let run={
        "title": Title,
        "start-date": startDAte,
        "end-date": endDate,
        Technologies,
        Description,
    } = req.body;
    console.log(req.body);
    console.log(run);

    const data = {
        "title": Title,
        "start-date": new Date(),
        "end-date": endDate,
        Technologies,
        Description,
        author : "Arkanul Adelis"
    }

    projects.push(data)
    console.log(projects);

    res.redirect("/home")
};