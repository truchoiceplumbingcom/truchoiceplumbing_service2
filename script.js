// FAQ

document.querySelectorAll(".faq-question").forEach(button=>{

button.addEventListener("click",()=>{

const item=button.parentElement;

item.classList.toggle("active");

});

});



// Scroll Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.15});

document.querySelectorAll("section,footer").forEach(el=>{

observer.observe(el);

});



// WhatsApp Form

const form=document.getElementById("whatsappForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name").value;

const phone=document.getElementById("phone").value;

const message=document.getElementById("message").value;

const text=`Hello Truchoice Plumbing Services,

My Name: ${name}

Phone: ${phone}

Problem:
${message}`;

window.open(

`https://wa.me/2348185557685?text=${encodeURIComponent(text)}`,

"_blank"

);

form.reset();

});

const menu=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("active");

});