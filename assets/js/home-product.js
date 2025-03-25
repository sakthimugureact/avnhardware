const homeproduct = document.getElementById('homeproductcontainer');

var localGetProduct = localStorage.getItem('home-product');
localGetProduct = JSON.parse(localGetProduct);

homeproduct.innerHTML=` <div class="main-container">
        <div class="product-details">
            <div class="product-image-container">
                <img src=${localGetProduct.product_image} alt="Piano Waterfall Kitchen Sink">
            </div>
            <div class="product-info">
                <h1 class="product-title">Piano Waterfall Kitchen Sink (30 x 18 x 9 inches) with Pull-out Mixer Faucet & RO Tap</h1>
                <p class="product-price">Rs. 1499</p>
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
                <button class="purchase-notes-button">Purchase Notes</button>
            </div>
        </div>
    </div>`
