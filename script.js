"use strict"

const bgm_music = document.querySelector("audio");
const background_display = document.getElementById("background");
const main_button = document.getElementById("main_button");
main_button.addEventListener("click", click_new_song);
document.body.addEventListener("keydown", space_new_song);

let time_counter = 0;

let offline_data = [];
fetch("./data.php").then(r => r.json()).then(data => offline_data.push(data));

function click_new_song() {
    const sounds_sources = offline_data[0].sounds.sources;
    time_counter = 0;
    background_display.style.opacity = "100%";
    main_button.style.opacity = "30%";
    main_button.addEventListener("mouseover", (event) => main_button.style.opacity = "100%");
    main_button.addEventListener("mouseout", (event) => main_button.style.opacity = "50%");

    bgm_music.src = `./sounds/${sounds_sources[0]}`;
    sounds_sources.splice(0, 1);

    setTimeout(() => {
        bgm_music.play();
        const timeInterval = setInterval(() => {
            time_counter++;
            if (time_counter == Math.floor(bgm_music.duration)) {
                time_counter = 0;
                clearInterval(timeInterval);
                click_new_song();
            }
        }, 1000);
    }, 1000);
};

function space_new_song(event) {
    if (event.key == " ") {
        const sounds_sources = offline_data[0].sounds.sources;
        time_counter = 0;
        background_display.style.opacity = "100%";
        main_button.style.opacity = "30%";
        main_button.addEventListener("mouseover", (event) => main_button.style.opacity = "100%");
        main_button.addEventListener("mouseout", (event) => main_button.style.opacity = "50%");

        bgm_music.src = `./sounds/${sounds_sources[0]}`;
        sounds_sources.splice(0, 1);

        setTimeout(() => {
            bgm_music.play();
            const timeInterval = setInterval(() => {
                time_counter++;
                if (time_counter == Math.floor(bgm_music.duration)) {
                    time_counter = 0;
                    clearInterval(timeInterval);
                    click_new_song();
                }
            }, 1000);
        }, 1000);

    }
}

