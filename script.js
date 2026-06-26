// ===============================
// Dolphin Travels - script.js
// ===============================

// Sticky Navbar Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 18px rgba(0,0,0,0.15)";
        header.style.background = "#ffffff";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "#ffffff";
    }
});

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });
        }

    });
});

// Reveal Animation
const revealItems = document.querySelectorAll(
".card,.vehicle,.route-list div,.contact-box"
);

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

    });

};

revealItems.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";
});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Back to Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

Object.assign(topBtn.style,{
position:"fixed",
right:"25px",
bottom:"100px",
width:"50px",
height:"50px",
border:"none",
borderRadius:"50%",
background:"#0077ff",
color:"#fff",
fontSize:"22px",
cursor:"pointer",
display:"none",
zIndex:"999"
});

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// Hero Fade Effect
const hero = document.querySelector(".hero");

window.addEventListener("scroll",()=>{

const y = window.scrollY;

hero.style.backgroundPositionY = y * 0.4 + "px";

});

// CTA Buttons Hover Animation
document.querySelectorAll(".btn,.btn2,.call-btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="scale(1.05)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="scale(1)";

});

});

// Console Branding
console.log(
"%c🐬 Welcome to Dolphin Travels",
"color:#0077ff;font-size:18px;font-weight:bold;"
);

console.log(
"Website developed for Dolphin Travels."
);

const rates = {

"Delhi Airport":[
["Sedan","₹2500"],
["Ertiga","₹3500"],
["Kia Carens","₹4000"],
["Crysta","₹5500"]
],

"Chandigarh":[
["Sedan","₹1700"],
["Ertiga","₹2500"],
["Innova","₹3500"]
],

"Haridwar":[
["Sedan","₹3500"],
["Ertiga","₹4500"],
["Innova","₹6000"]
],

"Shimla":[
["Sedan","₹4500"],
["Ertiga","₹6000"],
["Crysta","₹7500"]
],

"Manali":[
["Sedan","₹6999"],
["Ertiga","₹7999"],
["Crysta","₹8999"]
],

"Jaipur":[
["Sedan","₹4499"],
["Ertiga","₹4999"],
["Crysta","₹5999"]
]

};

function showRates(route){

document.getElementById("routeTitle").innerHTML=route;

let html="";

rates[route].forEach(function(car){

html += "<p><b>"+car[0]+"</b> : "+car[1]+"</p>";

});

document.getElementById("rateList").innerHTML=html;

document.getElementById("rateModal").style.display="block";

}

function closeModal(){

document.getElementById("rateModal").style.display="none";

}

window.onclick=function(e){

if(e.target==document.getElementById("rateModal")){

closeModal();

}

}
