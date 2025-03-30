    
function showingbrandsitems(){
    const productDiv = document.querySelector('.product-item')
    console.log(productDiv);

    const getitem = JSON.parse(localStorage.getItem('product'));
    getitem.map(val=>{
            const fanDiv = document.createElement('div');
            productDiv.append(fanDiv);
            fanDiv.className="fanDiv";
           fanDiv.innerHTML=`
                    <img src=${val.product_image} alt="Havells Brown Ceiling Fan">
                    <h3>${val.product_title}</h3>
                    <h5>Rs.${val.product_price}</5>`
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


function buyingitems(){
    const storingitems = JSON.parse(localStorage.getItem('product-buy'));
    console.log(storingitems);

    const brand_product = document.querySelector('.brand-product');
    brand_product.innerHTML=`<div class="main-container">
        <div class="product-details">
            <div class="product-image-container">
                <img src=${storingitems.product_image} alt="Piano Waterfall Kitchen Sink">
            </div>
            <div class="product-info">
                <h1 class="product-title">${storingitems.product_title}</h1>
                <p class="product-price">Rs.${storingitems.product_price}</p>
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

storingitems.quantity = `${quantityInput.value}`;
decrementButton.addEventListener('click', () => {
    let currentValue = Number(quantityInput.value);
    if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
        storingitems.quantity = `${quantityInput.value}`;
        console.log(quantityInput.value);

    }
});

storingitems.quantity = `${quantityInput.value}`;
incrementButton.addEventListener('click', () => {
    let currentValue = Number(quantityInput.value);
    quantityInput.value = currentValue + 1;
    storingitems.quantity = `${quantityInput.value}`;
    console.log(quantityInput.value);

});

const addTocartbtn = document.querySelector('.add-to-cart-button');
console.log(addTocartbtn);
addTocartbtn.addEventListener('click', () => {

    let existingATC = localStorage.getItem('addtocart');
    let newATC = existingATC ? JSON.parse(existingATC) : [];

    newATC.push(storingitems);
    localStorage.setItem('addtocart', JSON.stringify(newATC));
    alert('Item was added in cart Successfully')
    location.reload()
})
}
buyingitems()

