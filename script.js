let navbar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })})
appointment=document.querySelector(".appointment-wrapper");
window.addEventListener("load",function(){
    let width=window.innerWidth;
    if(width<768){
        appointment.style.background="url('./images/appointment-bg-2.png')";
        appointment.style.backgroundSize="cover";
        appointment.style.backgroundRepeat="no-repeat";
        appointment.style.backgroundPosition="center";
    }
    else{
        appointment.style.background="url('./images/appointmnet-bg.jpg')";
        appointment.style.backgroundSize="cover";
        appointment.style.backgroundRepeat="no-repeat";
        appointment.style.backgroundPosition="center";
    }
})
