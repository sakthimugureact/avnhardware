function bathroomProduct(){
    const bathroom = document.querySelector('.bathroom-product');
    
    const bathroomurl = '../assets/js/jsons/homeupgrade.json';
    fetch(bathroomurl).then(response=>response.json()).then(data=>{
        const bathroomdata = data.toilet;
        bathroomdata.map(val=>{
            const officeDiv = document.createElement('div');
            officeDiv.className="officeProduct";
            bathroom.append(officeDiv);
    
            officeDiv.innerHTML=`
             <div class="product-image">
                    <img src=${val.product_image}>
                </div>
                <h3 class="product-title">${val.product_title}</h3>
                <div class="product-price">Rs.${val.product_price}</div>
                `
            const officebuy = document.createElement('button');
            officebuy.innerText='Buy Now';
            officebuy.className='officebuybtn';
            officeDiv.append(officebuy);
    
            officebuy.addEventListener('click',()=>{
                location.href='../pages/office-buy.html'
                localStorage.setItem('showofficeProduct',JSON.stringify(val))
            })
        })

      
    })
}
bathroomProduct();

const trackmodel = document.querySelector('.track-modal');
console.log(trackmodel);

const trackpage = document.getElementById('trackpage');
trackpage.addEventListener('click',(e)=>{
    e.preventDefault()
    trackmodel.style.display="block"
})

const trackingDiv = document.querySelector('.tracking-modal')
const trackvalue = document.getElementById('trackingNumber');
const gettrackvalue = JSON.parse(localStorage.getItem('trackid'))
const tracksearchbtn = document.querySelector('.search-btn');
    tracksearchbtn.addEventListener('click',(e)=>{
         e.preventDefault();
        if(gettrackvalue.includes(trackvalue.value)){
            trackmodel.style.display="none";
            trackingDiv.style.display="block"
        }
        else{
            alert("Enter a correct track ID!!")
        }
})

const closetrack= document.querySelector('#close-trackbtn');
closetrack.addEventListener('click',()=>{
    trackingDiv.style.display="none"
})

const closeDiv = document.querySelector('#closetrackDiv');
closeDiv.addEventListener('click',()=>{
    trackmodel.style.display="none";
})

const randomNumber = Math.floor(Math.random() * 100) + 1;
function updateProgress(percentage) {
    const timeline = document.querySelector('.tracking-timeline');
    const items = timeline.querySelectorAll('.timeline-item');
    const totalSteps = items.length;
    const completedSteps = Math.floor((percentage / 100) * totalSteps);

    items.forEach((item, index) => {
        if (index < completedSteps) {
            item.setAttribute('data-status', 'completed');
        } else if (index === completedSteps) {
            item.setAttribute('data-status', 'active');
        } else {
            item.setAttribute('data-status', 'pending');
        }
    });
}
updateProgress(randomNumber)
