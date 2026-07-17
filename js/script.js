// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Navbar

window.addEventListener("scroll",()=>{

const nav=document.querySelector(".navbar");

if(window.scrollY>30){

nav.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";

}else{

nav.style.boxShadow="none";

}

});

// Reveal

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.classList.add("hidden");

observer.observe(sec);

}); 