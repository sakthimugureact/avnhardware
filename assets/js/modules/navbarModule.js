function navbarModule(){
const thirdNav = document.querySelector('.third-nav');
const secondNav = document.querySelector('.second-nav');
const firstNav = document.querySelector('.first-nav');

window.addEventListener("scroll",()=>{
    if(window.scrollY>150){
        secondNav.style.display="none";
        firstNav.style.display="none";
        thirdNav.style.position="fixed";
    }
    else if(window.scrollY<100){
        secondNav.style.display="flex";
        firstNav.style.display="flex";
        thirdNav.style.position="relative";
    }
})
}
navbarModule()
export{navbarModule}