let hamburger = false
const openBars = () => {
    let bars = document.getElementById("bars")
    if(!hamburger){
        bars.style.display = "block";
        hamburger =true;
    }else{
        bars.style.display = "none";
        hamburger =false;
    }
};