const homeproduct = document.getElementById('homeproductcontainer');

var localGetProduct = localStorage.getItem('home-product');
localGetProduct = JSON.parse(localGetProduct);
console.log(localGetProduct);


homeproduct.innerHTML = ` <div class="main-container">
        <div class="product-details">
            <div class="product-image-container">
                <img src=${localGetProduct.product_image} alt="Piano Waterfall Kitchen Sink">
            </div>
            <div class="product-info">
                <h1 class="product-title">${localGetProduct.product_title}</h1>
                <p class="product-price">Rs.${localGetProduct.product_price}</p>
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
                <h1 class=Des>Description<button id="desbtn">Show</button></h1>
                 <div class="description"> 
            <p>${localGetProduct.description}</p>
            </div>
            </div>
        </div>
    </div>`

const descontent = document.querySelector('.description');
const showdes = document.getElementById('desbtn');
showdes.addEventListener('click', () => {
    if (descontent.style.display == "none") {
        descontent.style.display = "block"
    }
    else {
        descontent.style.display = "none"
    }
})

const quantityInput = document.getElementById('quantity');
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');

localGetProduct.quantity = `${quantityInput.value}`
decrementButton.addEventListener('click', () => {
    let currentValue = Number(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        localGetProduct.quantity = `${quantityInput.value}`;
        console.log(quantityInput.value);

    }
});

localGetProduct.quantity = `${quantityInput.value}`
incrementButton.addEventListener('click', () => {
    let currentValue = Number(quantityInput.value);
    quantityInput.value = currentValue + 1;
    localGetProduct.quantity = `${quantityInput.value}`;
    console.log(quantityInput.value);

});




const addTocartbtn = document.querySelector('.add-to-cart-button');
console.log(addTocartbtn);
addTocartbtn.addEventListener('click', () => {

    let existingATC = localStorage.getItem('addtocart');
    let newATC = existingATC ? JSON.parse(existingATC) : [];

    newATC.push(localGetProduct);
    localStorage.setItem('addtocart', JSON.stringify(newATC));
    alert('Item was added in cart Successfully')
    location.reload()
})

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
