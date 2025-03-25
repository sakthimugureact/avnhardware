function contactshow(){
    const contactfromDiv = document.getElementById('contact-form');
    const contactformshow = document.getElementById('contactforms');
    const contactformclose = document.getElementById('closecontactform');

    contactformshow.addEventListener('click',(event)=>{
        event.preventDefault();
        contactfromDiv.style.display="block";
    })

    contactformclose.addEventListener('click',()=>{
        contactfromDiv.style.display="none";
    })


    const contactName = document.getElementById('contactname');
    const contactEmail = document.getElementById('contactemail');
    const contactPhone = document.getElementById('contactphone');
    const contactbtn = document.getElementById('contactbtn');
    const contactclose = document.getElementById('close-button');
    const feedback = document.querySelector('.feedback_container')

    const nameerror = document.getElementById('contactname-error');
    const emailerror = document.getElementById('contactemail-error');
    const phonerror= document.getElementById('contactphone-error');


    contactName.addEventListener('input',()=>{
        validateContactName()
        validateAllContactFields()
    })
    
    contactEmail.addEventListener('input',()=>{
        validateContactEmail()
        validateAllContactFields()
    })
    
    contactPhone.addEventListener("input",()=>{
        validateContactPhone()
        validateAllContactFields()
        
    })

    //validation name
function validateContactName(){
    const nameValue = contactName.value;
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
function validateContactEmail(){
    const emailPattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailValue = contactEmail.value;
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
function validateContactPhone(){
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    const phonevalue = contactPhone.value;
    if(phonevalue.trim()==""){
        phonerror.innerText="Enter a Phone Number"
        return true
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

    function validateAllContactFields() {
        const isEmailValid = validateContactEmail();
        const isNameValid = validateContactName();
        const isPhoneValid = validateContactPhone();
    
        if (isEmailValid && isNameValid && isPhoneValid) {
            contactbtn.disabled = false;
        } else {
            contactbtn.disabled = true;
        }
    }
    
    
    
    
    validateAllContactFields();
    contactbtn.addEventListener('click', (event) => {
        event.preventDefault();
        contactfromDiv.style.display="none"
        feedback.style.display="block";

        const ordervalues = [
            {Name : contactName.value},
            {Email : contactEmail.value},
            {Phone : contactPhone.value},
        ];
        
        
    
        let existingItem = localStorage.getItem('ContactMessage');
        let newItem = existingItem ? JSON.parse(existingItem) : [];
        
        newItem.push(ordervalues);
        localStorage.setItem('ContactMessage',JSON.stringify(newItem))
    });

    contactclose.addEventListener('click',()=>{
        feedback.style.display="none"
        location.reload()
    })
    
}
contactshow()

export{contactshow}