// select elements //
const menuBtn = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".close-menu");
const overlay = document.querySelector(".overlay");

// open mobile menu //
menuBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
    overlay.classList.add("active");
});

// close mobile menu //
closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
})

// close mobile menu by clicking objects //

const mobileLinks =
    document.querySelectorAll(".mobile-menu a");

mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

// close menu by clicking overlay
overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
})

//

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;

        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

// پیدا کردن همه عکس ها
const slides = document.querySelectorAll(".gallery-item");
let currentSlide = 0;

// تابع عوض کردن عکس ها
function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[currentSlide].classList.add("active");
    currentSlide++;
    if (currentSlide === slides.length) {
        currentSlide = 0;
    }
}

// اولین عکس نمایش داده بشه
showSlide();

// هر 3 ثانیه عکس عوض بشه
setInterval(showSlide, 4000)

// نمایش بخش ها هنگام اسکرول

const scrollsections = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
});

scrollsections.forEach((section) => {
    observer.observe(section);
});
