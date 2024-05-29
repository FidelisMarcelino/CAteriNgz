// NAVBAR
function toggleNavbar() {
    const navList = document.querySelector('.navigate');
    navList.classList.toggle('show');
}


// TESTIMONI
let slideIndex = 0;
let slides = document.querySelectorAll(".carousel-slide img");

function changImg(index){
    if(index < 0){
        slideIndex = slide.length -1;
    } else if(index >= slides.length){
        slideIndex = 0;
    }

    const move = -slideIndex * 100 + "%";
    document.querySelector(".carousel-slide").style.transform = "translateX(" + move + ")";
}

function nextBtn(){
    slideIndex++;
    changImg(slideIndex);
}

function prevBtn(){
    slideIndex--;
    changImg(slideIndex);
}

// OUR MISSIOn
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelectorAll(".logo");
    const contentTitle = document.getElementById("content-title");
    const contentText = document.getElementById("content-text");

    const contentData = {
        "support": {
            "title": "Support",
            "text": "Empower local farmers and artisans through meaningful partnerships."
        },
        "enchance": {
            "title": "Enchance",
            "text": "Promote sustainability and community growth with every dish we create."
        },
        "refine": {
            "title": "Refine",
            "text": "Promote sustainability and community growth with every dish we create."
        },
        "value": {
            "title": "Value",
            "text": "Prioritize high-quality ingredients and exceptional service."
        },
        "engage": {
            "title": "Engange",
            "text": "Make every event memorable and special with our culinary expertise."
        }
    };

    logo.forEach(logo => {
        logo.addEventListener("click", () => {
            const contentKey = logo.getAttribute("data-content");
            const content = contentData[contentKey];
            contentTitle.textContent = content.title;
            contentText.textContent = content.text;
        });
    });
});


// REGISTER
function validateForm(event){
    document.getElementById('error-name').innerText = "";
    document.getElementById('error-email').innerText = "";
    document.getElementById('error-address').innerText = "";
    document.getElementById('error-gender').innerText = "";
    document.getElementById('error-date').innerText = "";

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const date = document.getElementById('date').value;
    let valid = true;

    if(name.length < 3 || name.length > 20){
        document.getElementById('error-name').innerText = "Name must be between 3 - 20 characters";
        valid = false;
    } 
    
    if(!email.endsWith('@gmail.com')){
        document.getElementById('error-email').innerText = "Email must end with @gmail.com";
        valid = false;
    }
    
    if(!email.includes('@')){
        document.getElementById('error-email').innerText = "Email must contain'@'";
        valid = false;
    }
    
    if(!gender){
        document.getElementById('error-gender').innerText = "Gender must be checked";
        valid = false
    }

    if(!address){
        document.getElementById('error-address').innerText = "Address must be filled out";
        valid = false;
    }

    if(!date){
        document.getElementById('error-date').innerText = "Birth Date must be selected"
        valid = false;
    }

    return valid;
}

