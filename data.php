<?php

function sendJSON($message, $http_code) {
    header("content-type:application/json");
    http_response_code($http_code);
    echo json_encode($message);
    exit();
}

$all_data;
$scanned_music_folder = scandir("./sounds");
$music_without_dots = array_splice($scanned_music_folder, 2);
$music_data = shuffle($music_without_dots);
$all_data["sounds"]["sources"] = $music_without_dots;
$all_data["sounds"]["names"] = $music_without_dots;

$scanned_image_folder = scandir("./media");
$images_without_dots = array_splice($scanned_image_folder, 2);
$image_data = shuffle($images_without_dots);
$all_data["images"] = $images_without_dots;

sendJSON($all_data, 200);
?>