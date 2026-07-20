/* ==========================================
   SKR INTERNATIONAL V4
   script.js - Part 1
========================================== */

// ===============================
// Image Slider
// ===============================

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

    slides.forEach((slide)=>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");

}

function nextSlide(){

    if(slides.length===0) return;

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    showSlide(currentSlide);

}

if(slides.length > 0){

    showSlide(currentSlide);

    setInterval(nextSlide,3000);

}


// ===============================
// Fade Animation
// ===============================

const fadeItems=document.querySelectorAll(".card,.hero,.container");

const observer=new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

fadeItems.forEach((item)=>{

observer.observe(item);

});


// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll("[data-counter]");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute("data-counter");

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});
/* ==========================================
   SKR INTERNATIONAL V4
   script.js - Part 2
========================================== */

// ===============================
// Scroll To Top Button
// ===============================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.width = "45px";
scrollBtn.style.height = "45px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.background = "#0d6efd";
scrollBtn.style.color = "#fff";
scrollBtn.style.cursor = "pointer";
scrollBtn.style.display = "none";
scrollBtn.style.fontSize = "20px";
scrollBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// Navbar Shadow
// ===============================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (navbar) {

        if (window.scrollY > 50) {

            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

        } else {

            navbar.style.boxShadow = "none";

        }

    }

});


// ===============================
// Console Message
// ===============================

console.log("SKR INTERNATIONAL V4 Loaded Successfully");