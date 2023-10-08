let hamburgerIsOpen = false;
const openHamburgers = () => {
    let hamburgerNavContainer = document.getElementById("hamburgers-nav-container");
    if(!hamburgerIsOpen){
        hamburgerNavContainer.style.display = "block";
        hamburgerIsOpen = true;
    }else {
        hamburgerNavContainer.style.display = "none";
        hamburgerIsOpen = false;
    }
};



let aku = "sayang kamu"
console.log(aku)