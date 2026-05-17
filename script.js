const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

/* NEXT SLIDE */

function nextSlide(){

    slides[currentSlide].classList.remove("active");

    slides[currentSlide].classList.add("exit");

    currentSlide++;

    if(currentSlide >= slides.length){
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");

}

/* MUSIC */

const music = document.getElementById("music");

function playMusic(){

    music.play();

}

/* HEART EFFECT */

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤";

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 30 + 10 + "px";

    heart.style.animationDuration =
        Math.random() * 3 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },6000);

}

setInterval(createHeart,200);