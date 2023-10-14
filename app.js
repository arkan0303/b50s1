const express = require ("express")
const path = require ("path")
const app = express()
const port = 5000


// app.get("/arkan", function (req, res){
//     res.send("Hello gays wlcom tu the club")
// })
// app.listen(post, function(){
//     console.log("app listening on post 5000");
// app.get("/aku", (req, res) =>{
//     res.send("Pinjam dulu seratus")
// })
// app.listen(post, () => {
//     console.log ("ini running 5000");
// })

app.set("view engine", "hbs")
app.set("view", path.join (__dirname , "src/view"))

app.get("/home" , home)
app.listen(port, () => {
    console.log("server running port 5000");
})
function home (req, res){
    res.render("index")
}