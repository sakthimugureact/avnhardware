import { businessform } from "./modules/businessModule.js";
import { contactshow } from "./modules/contactModule.js";
// const thirdnav = document.querySelector('.third-nav')
// const firstnav = document.querySelector('.first-nav');
// const secondnav = document.querySelector('.second-nav') 
// window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) { 
//         thirdnav.style.position="fixed";
//         thirdnav.style.top="0px";
//         firstnav.style.display="none";
//         secondnav.style.display="none"
//     }
//     else{
//         thirdnav.style.position="static";
//         firstnav.style.display="flex";
//         secondnav.style.display="flex"
//     }
//     })

const homeitems = [];
const upgradeitems = [];
const enquiryitems = [];
const suppliesitems = [];
const homeproductitems = document.querySelector('.home-products');
const upgradeproduct = document.querySelector('.upgrade-product');
const enquiryproduct = document.querySelector('.enq-product');
const suppliesproduct = document.querySelector('.supplies_product');


const url = ('./assets/js/jsons/home.json');
fetch (url).then(response=>response.json()).then(data=>{data.homeproducts.map(val=>homeitems.push(val));
    data.upgradehome.map(val=>upgradeitems.push(val));
    data.enquiry.map(val=>enquiryitems.push(val));
    data.supplies.map(val=>suppliesitems.push(val))
});
console.log(upgradeitems);


setTimeout(() => {
        homeitems.map(val=>{
            const product_div = document.createElement('div');
            product_div.className="product-list"
            homeproductitems.append(product_div);
    
    
            product_div.innerHTML = `<img class="home-proimage" src=${val.product_image}>
            <p class="product-title">${val.product_title}</p>
            <h5 class="product-rating">${val.product_rating}</h5>
            <h5 class="product-price">${val.product_price}</h5>`

            const buynow = document.createElement('button');
            buynow.innerText=`${val.product_buy}`;
            buynow.classList.add('buynow');
            buynow.setAttribute('type','submit');
            product_div.append(buynow);

            buynow.addEventListener('click',()=>{
                localStorage.setItem('home-product',JSON.stringify(val));
                location.href="./pages/home-product.html"
            })
        });
}, 100);

setTimeout(()=>{
    upgradeitems.map(val=>{
        const upgrade_div = document.createElement('div');
        upgrade_div.className='upgrade-list';
        upgradeproduct.append(upgrade_div);

        upgrade_div.innerHTML=`<div class="upgrade"><img class="upgrade-image" src=${val.upgrade_img}></div>
        <div class="upgrade-head"><h3>${val.title}</h3></div>` 
    })
},200)

setTimeout(()=>{
    enquiryitems.map(val=>{
        const enquiry_div = document.createElement('div');
        enquiry_div.className = 'enquiry-list';
        enquiryproduct.append(enquiry_div);

        enquiry_div.innerHTML=`<img class="enq-img" src=${val.enquiry_img}>
        <h2 class="enq-title">${val.enquiry_title}</h2>`

        const enqbtn = document.createElement('button');
            enqbtn.innerHTML=`${val.enquiry_btn}`;
            enqbtn.classList.add('enqbtn');
            enqbtn.setAttribute('type','submit');
            // enqbtn.setAttribute('id','businessformShow')
            enquiry_div.append(enqbtn)
        console.log(enqbtn);
        
    })
},200)

setTimeout(()=>{
    suppliesitems.map(val=>{
        const supplies_div = document.createElement('div');
        supplies_div.className='supplies-list';
        suppliesproduct.append(supplies_div);

        supplies_div.innerHTML=`<img class="supp-img" src=${val.supplies_img}>
        <h2 class="supp-title">${val.supplies_title}</h2>`

        const supbtn = document.createElement('button');
        supbtn.innerText=`${val.supplies_btn}`;
        supbtn.classList.add('suppbtn');
        supbtn.setAttribute('type','submit');
        supplies_div.append(supbtn)
    })
},200)




