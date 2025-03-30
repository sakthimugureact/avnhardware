import { businessform } from "./modules/businessModule.js";
import { contactshow } from "./modules/contactModule.js";

const quantityInput = document.getElementById('quantity');

        const decrementButton = document.getElementById('decrement');
        const incrementButton = document.getElementById('increment');

        let quantity = Number(quantityInput.value);

        decrementButton.addEventListener('click', (event) => {
            event.preventDefault();
            if (quantity > 0) {
                quantity--;
                quantityInput.value = quantity;
            }
            validateAllFields()
        });

        incrementButton.addEventListener('click', (event) => {
            event.preventDefault(); 
            quantity++;
            quantityInput.value = quantity;
            validateAllFields()
        });


const quoteBtn = document.getElementById('quotes');
const quoteName = document.getElementById('bulkname');
const quoteEmail = document.getElementById('bulkemail');
const quotePhone = document.getElementById('bulkphone');
const quoteCity = document.getElementById('bulkstate');
const quoteproductName = document.getElementById('bulkproduct');
const thankyou = document.querySelector('.message-box');
const thankclose = document.getElementById('close-button')

//Error Division
const nameerror = document.getElementById('namebulk-error');
const emailerror = document.getElementById('emailbulk-error');
const phonerror= document.getElementById('phonebulk-error');
const cityerror = document.getElementById('citybulk-error');
const producterror = document.getElementById('productbulk-error');
const quantityerror = document.getElementById('quantity-error');


//Error Division Hide
quoteName.addEventListener('input',()=>{
    validateName()
    validateAllFields()
})

quoteEmail.addEventListener('input',()=>{
    validateEmail()
    validateAllFields()
})

quotePhone.addEventListener("input",()=>{
    validatePhone()
    validateAllFields()
    
})

quoteCity.addEventListener('input',()=>{
    validateCity()
    validateAllFields()
})

quoteproductName.addEventListener('input',()=>{
    validateProduct()
    validateAllFields()
})

incrementButton.addEventListener("click",()=>{
    validateQuantity()
    validateAllFields()
})

//validation name
function validateName(){
    const nameValue = quoteName.value;
    if(nameValue.trim()==""){
        nameerror.innerText="Enter Your Name";
        return false
    }
    else{
        nameerror.innerText=""
        return true
    }
   
}

//Validate Email
function validateEmail(){
    const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = quoteEmail.value;
    if(emailValue.trim()==""){
        emailerror.innerText="Enter a  Email Address"
        return false
    }
    else if(!emailPattern.test(emailValue)){
        emailerror.innerText="Enter a Valid Email Address"
        return false
    }
    else{
        emailerror.innerText=""
        return true
        
    }
}

//Validate Phone Number
function validatePhone(){
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phonevalue = quotePhone.value;
    if(phonevalue.trim()==""){
        phonerror.innerText="Enter a Phone Number"
        return false
    }
    else if(!phonePattern.test(phonevalue)){
        phonerror.innerText="Enter a Valid Phone Number"
        return false
    }
    else{
        phonerror.innerText=""
        return true
    }
}

//Validate City
function validateCity(){
    const cityvalue = quoteCity.value;
    if(cityvalue.trim()==""){
        cityerror.innerText="Enter Your City"
        return false
    }
    else{
        cityerror.innerText=""
        return true
        
    }
}

//Validate Product
function validateProduct(){
    const productvalue = quoteproductName.value;
    if(productvalue.trim()==""){
        producterror.innerText="Enter a Product Name"
        return false
    }
    else{
        producterror.innerText=""
        return true
    }
}

//Quantity Validation
function validateQuantity(){
    const quantityvalue = quantityInput.value;
    if(quantityvalue==0){
        quantityerror.innerText='Select a Quantity';
        return false
    }
    else{
        quantityerror.innerText=''
        return true
    }
}


function validateAllFields() {
    const isEmailValid = validateEmail();
    const isNameValid = validateName();
    const isCityValid = validateCity();
    const isProductValid = validateProduct();
    const isPhoneValid = validatePhone();
    const isQuantityValid = validateQuantity();

    if (isEmailValid && isNameValid && isCityValid && isProductValid && isPhoneValid && isQuantityValid) {
        quoteBtn.disabled = false;
    } else {
        quoteBtn.disabled = true;
    }
}




validateAllFields();
quoteBtn.addEventListener('click', (event) => {
    event.preventDefault();
    
    thankyou.style.display="block";

    const ordervalues = [
        {Name : quoteName.value},
        {Email : quoteEmail.value},
        {Phone : quotePhone.value},
        {City : quoteCity.value},
        {Product : quoteproductName.value},
        {Quantity : quantityInput.value}
    ];
    
    

    let existingItem = localStorage.getItem('BulkOrders');
    let newItem = existingItem ? JSON.parse(existingItem) : [];
    
    newItem.push(ordervalues);
    localStorage.setItem('BulkOrders',JSON.stringify(newItem))
});
thankclose.addEventListener('click',()=>{
    thankyou.style.display="none";
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