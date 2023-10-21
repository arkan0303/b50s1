const testimonial  = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open("GET" , "https://api.npoint.io/c2100bf7e6e14ad10485" , true)


    xhr.onload = function (){
        if(xhr.status == 200 ){
            resolve(JSON.parse(xhr.response))
        }else{
            reject("Error Loading Data")
        }
    }


    xhr.onerror = function(){
        reject("Network Error")
    }


    xhr.send()
})


 async function allTestimonial(){

    try{

        const response = await testimonial
        // console.log(response);

        let testimonialHTML = ""
 
        response.forEach(function (item) {
        testimonialHTML +=`
        <div class="testimonial">
            <img class="profil" src="${item.image}">
            <p class="quote">${item.quote}</p>
            <p class="author">${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i> </p>
        </div>
        `
    })
 
         document.getElementById("testi").innerHTML = testimonialHTML
    }catch (Error){
        console.log(Error);
    }
    
 }
 
 allTestimonial()

 
  async function filterTestimonial(rating){

    try{

        const response = await testimonial
        let testimonialHTML = "";

    const tesmonialfiltered = response.filter(function (item){
        return item.rating == rating
    })
    // console.log(tesmonialfiltered)

    if(tesmonialfiltered == 0){
        testimonialHTML += `<h1>Data Not Found</h1>` 
    }else {
        tesmonialfiltered.forEach(function(item){
            testimonialHTML += `
            <div class="testimonial">
                <img class="profil" src="${item.image}">
                <p class="quote">${item.quote}</p>
                <p class="author">${item.author}</p>
                <p class="author">${item.rating} <i class="fa-solid fa-star"></i> </p>
            </div>
            `;
        });
    }
    document.getElementById("testi").innerHTML = testimonialHTML
    }catch (Error){
        console.log(Error);
    }

    
}
filterTestimonial()