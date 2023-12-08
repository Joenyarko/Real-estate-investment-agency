
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function () {
        menu.classList.toggle('show');
    });
});

function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "flex";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
function openModal1() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "flex";
}

function closeModal1() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "none";
}
function openModal2() {
    var modal = document.getElementById("myModal3");
    modal.style.display = "flex";
}

function closeModal2() {
    var modal = document.getElementById("myModal3");
    modal.style.display = "none";
}
function openModal3() {
    var modal = document.getElementById("myModal4");
    modal.style.display = "flex";
}

function closeModal3() {
    var modal = document.getElementById("myModal4");
    modal.style.display = "none";
}
function scrollToServices() {
    if (window.location.pathname.includes("index.html")) {
        // If on the home page, scroll to the 'services' section
        var servicesSection = document.getElementById('services-section');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });

            // Add active class to the "Services" link
            var link = document.querySelector('.menu a[href="index.html"]');
            if (link) {
                link.classList.add('active');
            }
        }
    } else {
        // If on a different page, redirect to the home page with the appropriate anchor
        window.location.href = 'index.html#services-section';
    }
}
var slides = document.querySelectorAll('.slide');
var btns= document.querySelectorAll('.btn');
let currentSlide =1;



var manualNav=function(manual){
    slides.forEach((slide) => {
slide.classList.remove('active');

btns.forEach((btn) => {
btn.classList.remove('active');
});

    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}
btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
manualNav(i);
currentSlide = i;
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

slides[i].classList.add('active');
btns[i].classList.add('active');
i++;
if(slides.length == i){
    i=0;
}
if(i >= slides.length){
    return;
}
repeater();
        },10000);
    }
    repeater();
}
repeat();


