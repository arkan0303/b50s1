const express = require ("express")
const path = require ("path")
const app = express()
const port = 5000

app.set("view engine", "hbs");
app.set("views", path.join (__dirname, "src/view"));

//routing
app.get("/home",home);
app.get("/upload-project", project)
app.get("/testimonial",testi)
app.get("/contact", contact)
app.get("/detail-post", post)

//set stastic file server
app.use(express.static("src/assets"))


//local server
app.listen(port, () => {
    console.log("server running on port 5000");
});


function home (req, res){
    res.render("index");
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

