<?php
// associative array
$language = [
    'title' => 'html',
    'description' => 'Create the basic structure of a webpage'
];

echo $language["title"] . '</br>';
echo $language["description"] . '</br>';

$user = [
    "name" => "Yassin",
    "age" => 13,
    "Address" => [
        "City" => "Cairo",
        "Country" => "Egypt",
    ]
];
echo $user["name"] . '</br>';
echo $user["age"] . '</br>';
echo $user["Address"]["City"] . '/' .
    $user["Address"]["City"] . '</br>';


$numbers = [1, 3, 4, 4];
// foreach ->
foreach ($numbers as $number) {
    echo $number . "<br>";
}

foreach ($language as $key => $value) {
    echo $key . ": " . $value . '<br>';
}

$languages = [
    'ar' => 'Arabic',
    'en' => 'English',
    'tr' => "Turkish",
    'DE' => "German"
];

echo '<select>';
foreach ($languages as $lang) {
    echo "<option>" . $lang . '</option>';
}
echo '</select>';