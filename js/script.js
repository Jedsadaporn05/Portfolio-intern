// typing animation
var typed = new Typed(".typing",{
    strings: ["Web Developer","Computer Science-Multimedia Student","Frontend Developer","Software Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

//active navbar
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, footer");
    const navLinks = document.querySelectorAll(".nav li a");

    window.addEventListener("scroll", function () {
        let current = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(current)) {
                link.classList.add("active");
            }
        });

        // กรณีเลื่อนถึง Footer
        const footer = document.querySelector("footer");
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
            navLinks.forEach((link) => link.classList.remove("active"));
            document.querySelector('.nav li a[href="#contact"]').classList.add("active");
        }
    });
});


// Images Popup
let images = ["images/Ki1.jpg", "images/Ki2.jpg", "images/Ki3.jpg"]; // รายการรูปภาพ
let currentIndex = 0; // ตำแหน่งของรูปที่แสดงอยู่

function openLightbox(imageSrc) {
    currentIndex = images.indexOf(imageSrc); // หาตำแหน่งรูปใน Array
    document.getElementById('lightbox').style.display = 'flex';
    document.getElementById('lightbox-img').src = imageSrc;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1; // วนกลับไปที่รูปสุดท้าย
    } else if (currentIndex >= images.length) {
        currentIndex = 0; // วนกลับไปที่รูปแรก
    }
    document.getElementById('lightbox-img').src = images[currentIndex];
}