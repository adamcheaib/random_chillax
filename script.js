"use strict"

const background_display = document.getElementById("background");
const main_button = document.getElementById("main_button");
main_button.addEventListener("click", click_new_song);
document.body.addEventListener("keydown", space_new_song);

function click_new_song(event) {
    background_display.style.opacity = "100%";
    main_button.style.opacity = "30%";
};

function space_new_song(event) {
    if (event.key == " ") {
        background_display.style.opacity = "100%";
        main_button.style.opacity = "30%";
    }
}