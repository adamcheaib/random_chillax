<?php

function sendJSON($message, $http_code) {
    header("content-type:application/json");
    http_response_code($http_code);
    echo json_encode($message);
    exit();
}

$all_data = [];
$scanned_folder = scandir("./sounds");
$music_without_dots = array_splice($scanned_folder, 2);
$music_data = shuffle($music_without_dots);
$all_data["sounds"]["sources"] = $music_without_dots;
$all_data["sounds"]["names"] = $music_without_dots;

// var_dump($song_names);
sendJSON($all_data, 200);
?>