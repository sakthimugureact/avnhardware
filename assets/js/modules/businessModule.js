 function businessform(){
    const businessformDiv = document.getElementById('business-form');
    const businessformshow = document.getElementById('businessformShow');
    const businessformclose = document.getElementById('closeform');

    businessformshow.addEventListener('click',(event)=>{
        event.preventDefault();
        businessformDiv.style.display="block";
    })

    businessformclose.addEventListener('click',()=>{
        businessformDiv.style.display="none";
    })

    const businessName = document.getElementById('businessname');
    const businessEmail = document.getElementById('businessemail');
    const businessPhone = document.getElementById('businessphone');
    const businessCity = document.getElementById('businessstate');
    const businessMessage = document.getElementById('businessproduct');
    const businessbtn = document.getElementById('quote');
    const feedback = document.querySelector('.feedback_container');
    const feedclose = document.getElementById('close-button');

    const nameerror = document.getElementById('name-error');
    const emailerror = document.getElementById('email-error');
    const phonerror= document.getElementById('phone-error');
    const cityerror = document.getElementById('city-error');
    const producterror = document.getElementById('product-error');


//Error Division Hide
businessName.addEventListener('input',()=>{
    validateBusinessName()
    validateAllBusinessFields()
})

businessEmail.addEventListener('input',()=>{
    validateBusinessEmail()
    validateAllBusinessFields()
})

businessPhone.addEventListener("input",()=>{
    validateBusinessPhone()
    validateAllBusinessFields()
    
})

businessCity.addEventListener('input',()=>{
    validateBusinessCity()
    validateAllBusinessFields()
})

businessMessage.addEventListener('input',()=>{
    validateBusinessMessage()
    validateAllBusinessFields()
})


//validation name
function validateBusinessName(){
    const nameValue = businessName.value;
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
function validateBusinessEmail(){
    const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = businessEmail.value;
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
function validateBusinessPhone(){
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phonevalue = businessPhone.value;
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
function validateBusinessCity(){
    const cityvalue = businessCity.value;
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
function validateBusinessMessage(){
    const productvalue = businessMessage.value;
    if(productvalue.trim()==""){
        producterror.innerText="Enter a Message"
        return false
    }
    else{
        producterror.innerText=""
        return true
    }
}



function validateAllBusinessFields() {
    const isEmailValid = validateBusinessEmail();
    const isNameValid = validateBusinessName();
    const isCityValid = validateBusinessCity();
    const isMessageValid = validateBusinessMessage();
    const isPhoneValid = validateBusinessPhone();

    if (isEmailValid && isNameValid && isCityValid  && isPhoneValid && isMessageValid) {
        businessbtn.disabled = false;
    } else {
        businessbtn.disabled = true;
    }
}




validateAllBusinessFields();
businessbtn.addEventListener('click', (event) => {
    event.preventDefault();
    feedback.style.display="block";
    businessformDiv.style.display="none";
    const ordervalues = [
        {Name : businessName.value},
        {Email : businessEmail.value},
        {Phone : businessPhone.value},
        {City : businessCity.value},
        {Product : businessMessage.value}
    ];
    
    

    let existingItem = localStorage.getItem('BusinessMessage');
    let newItem = existingItem ? JSON.parse(existingItem) : [];
    
    newItem.push(ordervalues);
    localStorage.setItem('BusinessMessage',JSON.stringify(newItem))
});

feedclose.addEventListener('click',()=>{
    feedback.style.display="none"
    location.reload();
})
}
businessform()
export {businessform}
