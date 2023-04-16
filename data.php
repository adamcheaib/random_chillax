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

for ($i =0; $i < count($all_data["sounds"]["sources"]); $i++) {
    $all_data["sounds"]["names"][$i] = str_replace("_", " ", pathinfo($all_data["sounds"]["sources"][$i], PATHINFO_FILENAME));
}

$scanned_image_folder = scandir("./media");
$images_without_dots = array_splice($scanned_image_folder, 2);
$image_data = shuffle($images_without_dots);
$all_data["images"] = $images_without_dots;

sendJSON($all_data, 200);
?>