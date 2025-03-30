function kitchenItem(){
    const kitchenItempage = document.querySelector('.kitchen-item');
    console.log(kitchenItempage);

    const getitem = JSON.parse(localStorage.getItem('kitchenlist'));
    getitem.map(val=>{
            const fanDiv = document.createElement('div');
            kitchenItempage.append(fanDiv);
            fanDiv.className="fanDiv";
           fanDiv.innerHTML=`
                    <img src=${val.product_image}>
                    <h3>${val.product_title}</h3>
                    <h5>Rs.${val.product_price}</h5>`
            const buybtn = document.createElement('button');
            buybtn.className='buybtn'
            fanDiv.append(buybtn)
            buybtn.innerText=`${val.product_buy}`

            buybtn.addEventListener('click',()=>{
                location.href="../pages/brand-product.html"
                localStorage.setItem('product-buy',JSON.stringify(val));
            })
        })

        
}
kitchenItem()

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