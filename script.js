"use strict"

const bgm_music = document.querySelector("audio");
const background_display = document.getElementById("background");
const main_button = document.getElementById("main_button");
main_button.addEventListener("click", click_new_song);
document.body.addEventListener("keydown", space_new_song);

let time_counter = 0;
let offline_data = [];
let intervals = [];

fetch("./data.php").then(r => r.json()).then(data => offline_data.push(data));
console.log(offline_data);

function click_new_song() {
    if (intervals.length != 0) {
        clearInterval(intervals[0]);
    };

    time_counter = 0;
    const sounds_sources = offline_data[0].sounds.sources;
    const sounds_names = offline_data[0].sounds.names;
    const image_sources = offline_data[0].images;
    background_display.style.backgroundImage = `url(./media/${image_sources[0]})`; // Make a separate function for the images!
    background_display.style.opacity = "100%";

    main_button.style.opacity = "30%";
    main_button.addEventListener("mouseover", (event) => main_button.style.opacity = "100%");
    main_button.addEventListener("mouseout", (event) => main_button.style.opacity = "30%");

    bgm_music.src = `./sounds/${sounds_sources[0]}`;
    document.getElementById("artist").textContent = sounds_names[0];
    sounds_sources.splice(0, 1);
    sounds_names.splice(0, 1);
    image_sources.splice(0, 1);

    setTimeout(() => {
        bgm_music.play();
        const timeInterval = setInterval(() => {
            time_counter++;
            console.log(time_counter);
            if (time_counter == Math.floor(bgm_music.duration)) {
                time_counter = 0;
                clearInterval(timeInterval);
                click_new_song();
            }
        }, 1000);
        intervals.push(timeInterval);
    }, 1000);
};

function space_new_song(event) {
    if (intervals.length != 0) {
        clearInterval(intervals[0]);
    };
    time_counter = 0;
    switch (event.key) {
        case " ":
            const sounds_sources = offline_data[0].sounds.sources;
            const sounds_names = offline_data[0].sounds.names;
            const image_sources = offline_data[0].images;
            background_display.style.backgroundImage = `url(./media/${image_sources[0]})`;
            background_display.style.opacity = "100%";
            main_button.style.opacity = "30%";
            main_button.addEventListener("mouseover", (event) => main_button.style.opacity = "100%");
            main_button.addEventListener("mouseout", (event) => main_button.style.opacity = "50%");

            bgm_music.src = `./sounds/${sounds_sources[0]}`;
            document.getElementById("artist").textContent = sounds_names[0];
            sounds_sources.splice(0, 1);
            sounds_names.splice(0, 1);
            image_sources.splice(0, 1);

            setTimeout(() => {
                bgm_music.play();
                const timeInterval = setInterval(() => {
                    time_counter++;
                    console.log(time_counter);
                    if (time_counter == Math.floor(bgm_music.duration)) {
                        time_counter = 0;
                        clearInterval(timeInterval);
                        click_new_song();
                    }
                }, 1000);
                intervals.push(timeInterval);
            }, 1000); break;

        case "ArrowUp": bgm_music.volume += 0.1; break;
        case "ArrowDown": bgm_music.volume -= 0.1; break;
        case "p": bgm_music.paused ? bgm_music.play() : bgm_music.pause(); break;
    }
}

