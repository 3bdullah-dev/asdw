// Typed.js animation
new Typed(".multiple-text", {
    strings: ["مونتير فيديوهات", "Reels Editor", "Shorts Creator", "Video Editor"],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 1500,
    loop: true
});

// Mobile menu toggle
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {
    menuIcon.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}