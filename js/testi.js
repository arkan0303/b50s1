const testimonialData =[
    {
        author : "Arkanul Adelis",
        quote : "Biar silaturrahmi tidak putus , maka pinjemin aku seratus",
        author : "-Arkanul Adelis",
        image :  "./image/arkan4.jpg",
        rating : 5,
    },
    {
        
        author : "Arkanul Adelis",
        quote : "Biar silaturrahmi tidak putus , maka pinjemin aku seratus",
        author : "-Arkanul Adelis",
        image : "./image/arkan3.jpg",
        rating : 1,
    },
    {
        
        author : "Arkanul Adelis",
        quote : "Biar silaturrahmi tidak putus , maka pinjemin aku seratus",
        author : "-Arkanul Adelis",
        image : "./image/arkan2.jpg",
        rating : 3,
    },
    {
       
        author : "Arkanul Adelis",
        quote : "Biar silaturrahmi tidak putus , maka pinjemin aku seratus",
        author : "-Arkanul Adelis",
        image : "./image/arkan1.jpg",
        rating : 4,
    },
    
]

function allTestimonial(){
   let testimonialHTML = ""

   testimonialData.forEach(function (item) {
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
}

allTestimonial()

function filterTestimonial(rating){
    let testimonialHTML = "";

    const tesmonialfiltered = testimonialData.filter(function (item){
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
}
filterTestimonial()