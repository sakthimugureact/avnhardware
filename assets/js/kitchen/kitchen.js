function kitchenProduct(){
    const kitchen = document.querySelector('.kitchen-product');
    
    const kitchenurl = '../assets/js/jsons/homeupgrade.json';
    fetch(kitchenurl).then(response=>response.json()).then(data=>{
        const kitchendata = data.kitchen;
        kitchendata.map(val=>{
            const kitchenitemDiv = document.createElement('div');
            kitchenitemDiv.className=`kitchentypes`;
            kitchen.append(kitchenitemDiv);

            const createImage = document.createElement('img');
            createImage.src=`${val.product_image}`;
            kitchenitemDiv.append(createImage);
            createImage.className="kitchenItems"
            createImage.setAttribute('data-content',`${val.data}`)

            const kitchenTitle = document.createElement('h3');
            kitchenTitle.innerText=`${val.product_title}`
            kitchenitemDiv.append(kitchenTitle);

        })
    })

        fetch(kitchenurl).then(response=>response.json()).then(data=>{
        const kitchenTypes = document.querySelectorAll('.kitchenItems');
            console.log(kitchenTypes);  
        kitchenTypes.forEach(eve=>{
            eve.addEventListener('click',()=>{
                location.href="../pages/kitchenitems.html";
                const kitchenShow = eve.dataset.content;
                console.log(kitchenShow);
                localStorage.setItem('kitchenlist',JSON.stringify(data[kitchenShow]))
            }) 
        })
        
    })
}
kitchenProduct();

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
