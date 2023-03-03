<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
<div class="container">

    <?php

    // String functions
    $string = "    Hello World      ";

    echo "1 - " . strlen($string) . '<br>';
    echo "2 - " . trim($string) . '<br>';
    echo "3 - <pre>before" . ltrim($string) . 'after text</pre>';
    echo "4 - <pre>before text" . rtrim($string) . 'after</pre><br>';
    echo "5 - " . str_word_count($string) . '<br>';
    echo "6 - " . strrev($string) . '<br>';
    echo "7 - " . strtoupper($string) . '<br>';
    echo "8 - " . strtolower($string) . '<br>';
    echo "9 - " . ucfirst('hello') . '<br>';
    echo "10 - " . lcfirst('HELLO') . '<br>';
    echo "11 - " . ucwords('hello world') . '<br>';
    echo "12 - " . strpos($string, 'world') . '<br>'; // Change into World
    echo "13 - " . stripos($string, 'world') . '<br>'; // case insensitive.
    echo "14 - " . substr($string, 8) . '<br>';
    echo "15 - " . str_replace('World', 'PHP', $string) . '<br>';
    echo "16 - " . str_ireplace('world', 'PHP', $string) . '<br>';
//    $username = "YASSIN";
//    if (strtolower($username) == "yassin"){
//        echo "Equal";
//    } else {
//        echo "not equal";
//    }

    // Multiline text and reserve html tags
    $longText = "Hello I am <span>Malek</span>,
        I am <b>11</b> years old";
    echo "1 - " . $longText . '<br>';
    echo "2 - " . nl2br($longText) . '<br>';
    echo "3 - " . htmlentities($longText) . '<br>';
    echo "4 - " . nl2br(htmlentities($longText)) . '<br>';
    echo "5 - " . html_entity_decode(htmlentities($longText)) . '<br>';
    echo "6 - " . htmlspecialchars($longText) . '<br>';
    ?>
</div>

</body>
</html>


