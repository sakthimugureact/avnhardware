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
    trackingDiv.style.display="none";
    location.reload()
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







const cartitems = document.getElementById('cartItems');
console.log(cartitems);

const loadcart = JSON.parse(localStorage.getItem('addtocart'));
console.log(loadcart);

const savecart = [];
loadcart.map(val => {
    savecart.push(val);
})

const finalpriceshow = []
console.log(finalpriceshow);


const cartlength = document.querySelector('.cartlength');
console.log(cartlength);
cartlength.textContent=`${loadcart.length}`


savecart.map(val => {

    const price = val.product_price;
    const quantityValue = Number(val.quantity);
    const finalPrice = price * quantityValue;
    console.log(finalPrice);

    finalpriceshow.push(finalPrice)

    const productinfo = document.createElement('div');
    productinfo.className = 'product-info'
    cartitems.append(productinfo)

    const productimage = document.createElement('img');
    productimage.src = `${val.product_image}`
    productinfo.append(productimage);

    const producttitle = document.createElement('h2');
    productinfo.append(producttitle)
    producttitle.innerText = `${val.product_title}`

    const quantity = document.createElement('div');
    quantity.className = 'quantity';
    cartitems.append(quantity);

    const spanquantity = document.createElement('span');
    spanquantity.innerText = `${val.quantity}`
    quantity.append(spanquantity)

    const cartprice = document.createElement('div');
    cartitems.append(cartprice);
    cartprice.innerText = `Rs.${finalPrice}`
    cartprice.className = 'price'

    const removebtn = document.createElement('button');
    cartprice.append(removebtn);
    removebtn.innerText = 'X'
    removebtn.className = "cartitemremove"

    removebtn.addEventListener('click', () => {
        alert('Item was removed successfully')
        savecart.splice(val, 1);
        localStorage.setItem('addtocart', JSON.stringify(savecart));
        location.reload();
    })
    const total = document.querySelector('.totalprice');

    total.innerHTML = `
<h1>Total : </h1>
<h1>Rs.${finalpriceshow.reduce((x, y) => x + y, 0)}.00</h1>
`
    const promocode = document.getElementById('promocode');
    const promobutton = document.querySelector('.apply-btn');
    promobutton.addEventListener('click', () => {
        if (promocode.value == "awn10") {
            alert('Promocode Applied Successfull')
            const discountcalc = finalpriceshow.reduce((x, y) => x + y, 0)
            let discalc = discountcalc * 0.10;
            let totalcalc = discountcalc - discalc;
            total.innerHTML = `
            <h1>Total : </h1>
            <h1>Rs.${totalcalc}</h1>
            `
        }
        else {
            total.innerHTML = `
        <h1>Total : </h1>
        <h1>Rs.${finalpriceshow.reduce((x, y) => x + y, 0)}.00</h1>
        `
        }

    })

    const radioButtons = document.querySelectorAll('input[name="payment"]');
    const payButton = document.querySelector('.place-order');

    function paymentMethod() {
        let isAnySelected = false;
        radioButtons.forEach(radio => {
            if (radio.checked) {
                isAnySelected = true;
            }
        });
        payButton.disabled = !isAnySelected;
    }
    radioButtons.forEach(radio => {
        radio.addEventListener('change', paymentMethod);
    });

    paymentMethod();

    //track
    const tracknumber = [];
    const feedback = document.querySelector('.feedback_containers')
    payButton.addEventListener('click', () => {
        feedback.style.display = 'block';
        const track = Math.floor(Math.random() * 1000000)
        tracknumber.push(track)
        const finaltrack = tracknumber.join("")

        let existingTrack = localStorage.getItem('trackid');
        let newTrack = existingTrack ? JSON.parse(existingTrack) : [];

        newTrack.push(finaltrack);
        localStorage.setItem('trackid', JSON.stringify(newTrack))

        const gettrack = JSON.parse(localStorage.getItem('trackid'));
        const finalshow = gettrack.at(-1);
        
        const ordermsg = document.getElementById('ordermsg');
        console.log(ordermsg);
        
        ordermsg.innerText = `Order Tracking Id: ${finalshow}`
    })

    const thankclose = document.querySelector('#close-buttons')
    thankclose.addEventListener('click', () => {
        feedback.style.display = "none";
        localStorage.removeItem('addtocart')
        location.reload()
    })
})

