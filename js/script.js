// ==========================
// Sister Maid NJ
// Premium JavaScript
// ==========================

// Fade-in animation
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll("section, .card").forEach((el) => {
    el.classList.add("hidden");
    observer.observe(el);
});

// Back to Top Button
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topButton";

document.body.appendChild(topButton);

topButton.onclick = () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 400){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

// Floating WhatsApp
const whatsapp=document.createElement("a");

whatsapp.href="https://wa.me/15513591685";

whatsapp.target="_blank";

whatsapp.innerHTML="💬";

whatsapp.className="floating whatsapp";

document.body.appendChild(whatsapp);

// Floating Call Button
const phone=document.createElement("a");

phone.href="tel:+15513591685";

phone.innerHTML="📞";

phone.className="floating phone";

document.body.appendChild(phone);
