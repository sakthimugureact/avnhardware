import { businessform } from "./modules/businessModule.js";
import { contactshow } from "./modules/contactModule.js";

const catebtn = document.querySelectorAll('.category-button')
console.log(catebtn);

const content = document.querySelector('.content');
console.log(content);

const url = "../assets/js/jsons/buyingGuide.json"
fetch(url).then(response=>response.json()).then(data=>{
    catebtn.forEach(val => {
        console.log(val);
        val.addEventListener('click', () => {
            const contentKey = val.dataset.content;
            // content.innerHTML = `${data[contentKey]}`;
            localStorage.setItem('led',JSON.stringify(data[contentKey]));
        });
    })
    
})

function leds(){
    window.location.href = "../pages/led.html";
}

