// =========================
// VELAN TOURS & TRAVELS
// SCRIPT.JS
// =========================

// MOBILE MENU

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// CLOSE MENU WHEN CLICKING LINK

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        if(navLinks){
            navLinks.classList.remove("active");
        }

    });

});

// =========================
// SCROLL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
".destination-card, .package-card, .vehicle-card, .why-card, .review-card, .stat-card"
);

function revealOnScroll(){

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll(".stat-card h2");

const startCounter = () => {

    counters.forEach(counter => {

        const target = parseInt(
            counter.innerText.replace("+","")
        );

        let count = 0;

        const updateCounter = () => {

            const increment = target / 100;

            if(count < target){

                count += increment;

                counter.innerText =
                Math.ceil(count) + "+";

                setTimeout(updateCounter,20);

            }else{

                counter.innerText =
                target + "+";

            }

        };

        updateCounter();

    });

};

let counterStarted = false;

window.addEventListener("scroll", () => {

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const sectionTop =
    statsSection.getBoundingClientRect().top;

    if(sectionTop < window.innerHeight &&
       !counterStarted){

        startCounter();

        counterStarted = true;
    }

});

// =========================
// HERO PARALLAX EFFECT
// =========================

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if(hero){

        let offset = window.pageYOffset;

        hero.style.backgroundPositionY =
        offset * 0.5 + "px";

    }

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if(
            link.getAttribute("href")
            .includes(current)
        ){

            link.classList.add("active-link");

        }

    });

});

// =========================
// PACKAGE HOVER EFFECT
// =========================

document.querySelectorAll(".package-card")
.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-10px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";

    });

});

// =========================
// SMOOTH PAGE LOAD
// =========================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"Velan Tours & Travels Website Loaded Successfully"
);