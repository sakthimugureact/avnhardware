import { businessform } from "./businessModule.js";

const container = document.querySelector('.container');
console.log(container);

function showbuyingitems(){
    var description = localStorage.getItem('led');
    description=JSON.parse(description);
    description.map(val=>
    {
        container.innerHTML=`<div class="banner-img">
        <img src=${val.banner}></div>
        <h2 class="description-title">${val.title}</h2>
        <div class="decription-content">
        <h4>${val.sub1}</h4>
        <p>${val.sub1para}</p>
        <h4>${val.sub2}</h4>
        <p>${val.sub2para}</p>
        <h4>${val.sub3}</h4>
        <p>${val.sub3para}</p>
        <h4>${val.sub4}</h4>
        <p>${val.sub4para}</p>
        </div>`
    }
    );
}
