// ========================================
// GEO DESIGN — ORGANIC JS
// ========================================

const cursor = document.querySelector(".cursor");


// ========================================
// CURSOR FLUIDO
// ========================================

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animateCursor(){

    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;

    cursor.style.left = currentX + "px";
    cursor.style.top = currentY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();


// ========================================
// CURSOR REACTIVO
// ========================================

const interactive =
document.querySelectorAll(
"a, .project-image, .project-info, h1, h2, h3"
);

interactive.forEach((el) => {

    el.addEventListener("mouseenter", () => {

        cursor.style.width = "90px";
        cursor.style.height = "90px";

        cursor.style.background =
        "rgba(255,255,255,.45)";

    });

    el.addEventListener("mouseleave", () => {

        cursor.style.width = "24px";
        cursor.style.height = "24px";

        cursor.style.background = "transparent";

    });

});


// ========================================
// HERO PARALLAX
// ========================================

const heroTitle =
document.querySelector(".hero-content h1");

const heroText =
document.querySelector(".hero-content p");

document.addEventListener("mousemove", (e) => {

    const x =
    (window.innerWidth / 2 - e.clientX) / 40;

    const y =
    (window.innerHeight / 2 - e.clientY) / 40;

    heroTitle.style.transform = `
    translate(${x}px, ${y}px)
    rotate(${x * 0.02}deg)
    `;

    heroText.style.transform = `
    translate(${x * -0.3}px, ${y * -0.3}px)
    `;

});


// ========================================
// BLOBS
// ========================================

const blobs =
document.querySelectorAll(".blob");

document.addEventListener("mousemove", (e) => {

    blobs.forEach((blob, index) => {

        const speed =
        (index + 1) * 0.025;

        const x =
        (window.innerWidth / 2 - e.clientX) * speed;

        const y =
        (window.innerHeight / 2 - e.clientY) * speed;

        blob.style.transform = `
        translate(${x}px, ${y}px)
        scale(${1 + speed})
        `;

    });

});


// ========================================
// FLOATING PROJECTS
// ========================================

const projects =
document.querySelectorAll(".project");

window.addEventListener("mousemove", (e) => {

    const centerX =
    window.innerWidth / 2;

    const centerY =
    window.innerHeight / 2;

    const rotateX =
    (e.clientY - centerY) / 120;

    const rotateY =
    (e.clientX - centerX) / 120;

    projects.forEach((project, index) => {

        const intensity =
        (index + 1) * 0.08;

        project.style.transform = `
        perspective(1800px)
        rotateX(${rotateX * intensity}deg)
        rotateY(${rotateY * intensity}deg)
        translateY(${Math.sin(Date.now() * 0.001 + index) * 6}px)
        `;

    });

});


// ========================================
// IMÁGENES LÍQUIDAS
// ========================================

const organicImages =
document.querySelectorAll(".project-image");

organicImages.forEach((img, index) => {

    let time = index;

    function morph(){

        time += 0.006;

        const radius1 =
        38 + Math.sin(time) * 5;

        const radius2 =
        62 + Math.cos(time) * 5;

        const radius3 =
        55 + Math.sin(time * 1.4) * 4;

        const radius4 =
        45 + Math.cos(time * 1.2) * 4;

        img.style.borderRadius = `
        ${radius1}% ${radius2}%
        ${radius3}% ${radius4}% /
        ${radius4}% ${radius1}%
        ${radius2}% ${radius3}%
        `;

        requestAnimationFrame(morph);

    }

    morph();

});


// ========================================
// REVEAL
// ========================================

const reveal =
document.querySelectorAll(
".project, .manifesto, .quote, .contact"
);

reveal.forEach((el) => {

    el.style.opacity = "0";

    el.style.transform +=
    " translateY(80px)";

    el.style.transition =
    "all 1.6s cubic-bezier(.19,1,.22,1)";

});

function revealElements(){

    reveal.forEach((el) => {

        const top =
        el.getBoundingClientRect().top;

        if(top < window.innerHeight * 0.88){

            el.style.opacity = "1";

            el.style.transform =
            el.style.transform.replace(
            "translateY(80px)",
            "translateY(0px)"
            );

        }

    });

}

window.addEventListener("scroll", revealElements);

revealElements();


// ========================================
// TÍTULOS VIVOS
// ========================================

const titles =
document.querySelectorAll("h1,h2,h3");

titles.forEach((title) => {

    title.style.transition = `
    letter-spacing 1.4s cubic-bezier(.19,1,.22,1),
    transform 1.8s cubic-bezier(.19,1,.22,1),
    filter 1.8s ease
    `;

    title.addEventListener("mouseenter", () => {

        title.style.letterSpacing = "8px";

        title.style.transform = `
        scale(1.015)
        translateY(-2px)
        `;

        title.style.filter = `
        blur(.2px)
        drop-shadow(0 10px 25px rgba(255,110,199,.18))
        `;

    });

    title.addEventListener("mouseleave", () => {

        title.style.letterSpacing = "0px";

        title.style.transform = `
        scale(1)
        translateY(0px)
        `;

        title.style.filter = `
        blur(0px)
        drop-shadow(0 0 0 rgba(0,0,0,0))
        `;

    });

});


// ========================================
// QUOTE BREATHING
// ========================================

const quote =
document.querySelector(".quote h2");

let breath = 0;

function breathing(){

    breath += 0.02;

    const scale =
    1 + Math.sin(breath) * 0.015;

    quote.style.transform =
    `scale(${scale})`;

    requestAnimationFrame(breathing);

}

breathing();


// ========================================
// PARALLAX IMAGES
// ========================================

const images =
document.querySelectorAll(".project-image img");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    images.forEach((img, index) => {

        const speed =
        (index + 1) * 0.015;

        img.style.transform = `
        translateY(${scrollY * speed}px)
        scale(1.12)
        rotate(${Math.sin(scrollY * 0.0006) * 1}deg)
        `;

    });

});