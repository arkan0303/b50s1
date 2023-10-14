// let y = 20
// let x = 20

// let aku = y + x
// console.log(aku)


function submitData() {
    let name = document.getElementById("nama").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let subject = document.getElementById("input-select").value;
    let message = document.getElementById("Description").value;

    if (name === ""){
        return alert("mas isi name nya")
    } else if (email === ""){
        return alert("mas isi email nya")
    } else if ( number === ""){
        return alert ( "mas isi number nya")
    } else if ( subject === ""){
        return alert ("mas isi subject nya")
    } else if ( message === ""){
        return alert("mas isi message nya")
    }

    let emailRecaiver = "arkanuladelis8@gmail.com"
    let a = document.createElement("a")
    a.href = `mailto: ${emailRecaiver}?subject=${subject}&body=Hello, nama saya ${name} , ${message}. Tolong kontak saya di nomer ini ${number} atau email saya disini ${email}`
    a.click()

    let messagers = {
        Nama : name,
        Email : email,
        Phone_Number : number,
        Subject : subject,
        Message : message,

     }
     console.log(messagers)
}