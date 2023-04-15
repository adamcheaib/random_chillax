"use strict"

const bgm_music = document.querySelector("audio");
const background_display = document.getElementById("background");
const main_button = document.getElementById("main_button");
main_button.addEventListener("click", click_new_song);
document.body.addEventListener("keydown", space_new_song);

let time_counter = 0;

function click_new_song(event) {
    time_counter = 0;
    background_display.style.opacity = "100%";
    main_button.style.opacity = "30%";
    main_button.addEventListener("mouseover", (event) => main_button.style.opacity = "100%");
    main_button.addEventListener("mouseout", (event) => main_button.style.opacity = "30%");
    bgm_music.src = "./sounds/Guustavv - Unsubmarine.mp3";

    setTimeout(() => {
        console.log(Math.floor(bgm_music.duration))
        bgm_music.play();
        setInterval(() => {
            time_counter++;
            if (Math.floor(bgm_music.duration) == time_counter) {
                console.log("DONE!");
                time_counter = 0;
            }
            console.log(time_counter);
        }, 1000);
    }, 1000)
};

function space_new_song(event) {
    if (event.key == " ") {
        background_display.style.opacity = "100%";
        main_button.style.opacity = "30%";
        main_button.addEventListener("mouseover", (event) => main_button.style.opacity = "100%");
        main_button.addEventListener("mouseout", (event) => main_button.style.opacity = "30%");
    }
}

