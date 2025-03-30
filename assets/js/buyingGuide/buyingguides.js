const catebtn = document.querySelectorAll('.category-button')
const content = document.querySelector('.content');
const url = "../assets/js/jsons/buyingGuide.json"
fetch(url).then(response=>response.json()).then(data=>{
    catebtn.forEach(val => {
        val.addEventListener('click', () => {
            const contentKey = val.dataset.content;
            localStorage.setItem('led',JSON.stringify(data[contentKey]));
            window.location.href = "../pages/led.html";
        });
    })
    
})


