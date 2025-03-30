const showcontent = document.querySelector('.brandcontent');

function showcontentitems(){
    var desShow = JSON.parse(localStorage.getItem('brandfirstpage'));
    desShow.map(val=>{
        showcontent.innerHTML= `<img class="branditemlogo" src=${val.logo}>
        <div class="main-container">
        <div class="category-grid">
            <button class="category-item" data-content="fans">
                <img src=${val.fan_image} alt="Fans">
                <h3>${val.fan_title}</h3>
            </button>
            <button class="category-item" data-content="airconditioner">
                <img src=${val.ac_image} alt="Air Conditioner">
                <h3>${val.ac}</h3>
            </button>
            <button class="category-item" data-content="washingmachine">
                <img src=${val.washing_image} alt="Washing Machine">
                <h3>${val.wm_title}</h3>
            </button>
            <button class="category-item" data-content="fridge">
                <img src=${val.fridge_image} alt="Refrigerator">
                <h3>${val.fridge_title}</h3>
            </button>
        </div>
        <div class="sub-main">
        <button class="category-item" data-content="heater">
                <img src=${val.heater_image} alt="Water Heater">
                <h3>${val.heater_title}</h3>
            </button>
        </div>
    </div>`
    })
    const catitem = document.querySelectorAll('.category-item');
    console.log(catitem);
    catitem.forEach(val=>{
        val.addEventListener('click',()=>{
            const productstore = val.dataset.content;
            console.log(productstore);
            location.href='../pages/branditems.html';
            const getproductDetails =JSON.parse( localStorage.getItem('brandfirstpage'));
            getproductDetails.find(val=>{
                const showdetails= val[productstore]
                console.log(showdetails);
                localStorage.setItem('product',JSON.stringify(showdetails)); 
            })
        })
    })
}
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