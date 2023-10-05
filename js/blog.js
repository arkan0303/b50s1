// let namaSiswa =["Rizqul", "Lidia", "Putu", "Joko"]
// console.log(namaSiswa)
// console.log(namaSiswa[1])
// console.log(namaSiswa[2])
// console.log(namaSiswa.slice(1,3))



// let nama = "Arkanul Adelis"
// let alamat = "cicurug"
// let umur = 20

// // objeck

// let dataPersonal1 = {
//     nama: "Rizqul",
//     alamat : "Depok",
//     Umuru : 24

// }
// let dataPersonal2 = {
//     nama: "aekan",
//     alamat : "cicurug",
//     Umuru : 20
    
// }
// let dataPersonal3 = {
//     nama: "agus",
//     alamat : "bogor",
//     Umuru : 27   
// }
// let dataPersonal4 = {
//     nama: "anshor",
//     alamat : "bandung",
//     Umuru : 20
    
// }
// console.log(dataPersonal1.nama)
// console.log(dataPersonal2)
// console.log(dataPersonal3)
// console.log(dataPersonal4)

// let dataPersonal=[
//     {
//         nama: "Rizqul",
//         alamat : "Depok",
//         Umuru : 24
    
//     },
//     {
//         nama: "arkan",
//         alamat : "cicurug",
//         Umuru : 20
        
//     },
//     {
//         nama: "agus",
//         alamat : "bogor",
//         Umuru : 27   
//     },
//     {
//         nama: "anshor",
//         alamat : "bandung",
//         Umuru : 20
        
//     }
// ]
// console.log(dataPersonal)
// console.log(dataPersonal[3])
// console.log(dataPersonal[2]. nama)



let data =[]
 
function addData (e){
    e.preventDefault();

    let blog = {
        title :document.getElementById("input-blog-title").value,
        content :document.getElementById("input-blog-conten").value,
    };
    data.push(blog);
    console.log(data);
  
}