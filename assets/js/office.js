function officelist(){
    const office_product = document.querySelector('.office-product');
    const load_product = JSON.parse(localStorage.getItem('office-product'));
    load_product.map(val=>{
        const officeDiv = document.createElement('div');
        officeDiv.className="officeProduct";
        office_product.append(officeDiv);

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
}


function officeshow(){
    const getoffice = JSON.parse(localStorage.getItem('showofficeProduct'));
    console.log(getoffice);

    const productshowDiv = document.querySelector('.office-productshow');
    console.log(productshowDiv);

    productshowDiv.innerHTML=`<div class="main-container">
        <div class="product-details">
            <div class="product-image-container">
                <img src=${getoffice.product_image} alt="Piano Waterfall Kitchen Sink">
            </div>
            <div class="product-info">
                <h1 class="product-title">${getoffice.product_title}</h1>
                <p class="product-price">Rs.${getoffice.product_price}</p>
                <p class="tax-info">Tax included. Shipping calculated at checkout.</p>
                <div class="quantity-container">
                    <label for="quantity" class="quantity-label">Quantity</label>
                    <div class="quantity-input-container">
                        <button class="quantity-input-button" id="decrement">-</button>
                        <input type="number" id="quantity" class="quantity-input" value="1" min="1">
                        <button class="quantity-input-button" id="increment">+</button>
                    </div>
                </div>
                <button class="add-to-cart-button">Add to Cart</button>
                <button class="buynowbutton">Buy Now</button>
            </div>
            </div>
        </div>
    </div>`
    const quantityInput = document.getElementById('quantity');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');

getoffice.quantity = `${quantityInput.value}`
decrementButton.addEventListener('click', () => {
    let currentValue = Number(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        getoffice.quantity = `${quantityInput.value}`;
        console.log(quantityInput.value);

    }
});

getoffice.quantity = `${quantityInput.value}`
incrementButton.addEventListener('click', () => {
    let currentValue = Number(quantityInput.value);
    quantityInput.value = currentValue + 1;
    getoffice.quantity = `${quantityInput.value}`;
    console.log(quantityInput.value);

});
const addTocartbtn = document.querySelector('.add-to-cart-button');
console.log(addTocartbtn);
addTocartbtn.addEventListener('click', () => {

    let existingATC = localStorage.getItem('addtocart');
    let newATC = existingATC ? JSON.parse(existingATC) : [];

    newATC.push(getoffice);
    localStorage.setItem('addtocart', JSON.stringify(newATC));
    alert('Item was added in cart Successfully');
    location.reload()
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
