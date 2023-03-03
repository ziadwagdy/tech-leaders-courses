<!DOCTYPE html>
<html lang="en">

<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>

<body>
<div class="container">

    <?php
    // Numbers in PHP
    //$number = "3g.5";
    //echo '<br>';
    //var_dump($number);
    //echo '<br>';
    //echo is_numeric($number);
    /*
     * is_float()
     * is_integer()
     * */
    $data = "3.6";
    if (is_numeric($data)) {
        $number = (float)$data;
        echo "<p class='alert-success'>$number</p>";
    } else {
        echo "<p class='alert-danger'>$data is not numeric</p>";
    }

    // Number functions
    echo "abs(-15) " . abs(-15) . '<br>';
    echo "pow(2,  3) " . pow(2, 3) . '<br>';
    echo "sqrt(16) " . sqrt(16) . '<br>';
    echo "max(2, 3) " . max(2, 3) . '<br>';
    echo "min(2, 3) " . min(2, 3) . '<br>';
    echo "round(2.4) " . round(2.4) . '<br>';
    echo "round(2.5) " . round(2.6) . '<br>';
    echo "floor(2.6) " . floor(2.6) . '<br>';
    echo "ceil(2.4) " . ceil(2.4) . '<br>';

    // Formatting numbers
    $number = 12345678912375.78;
    // ( float $number , int $decimals = 0 , string $dec_point = "." , string $thousands_sep = "," ): string
    echo $number . "<br>";
    echo number_format($number, 3, '.', ',') . '<br>';
    ?>
</div>

</body>
</html>


