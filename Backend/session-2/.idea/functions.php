<?php
function add(int|float $a, int|float $b): int|float
{
    return $a + $b;
}

//echo add("a", "b");
echo add(1, 3);
echo '<br>';
echo add(1.5, 3.5);
echo '<br>';


// variadic functions
function sum(int ...$numbers): int
{
    $total = 0;
    for ($i = 0; $i < count($numbers); $i++){
        $total += $numbers[$i];
    }

    return $total;
}

echo sum(1, 2 , 3 , 5, 6);
echo '<br>'; 

function hello($name, $lastname, $delimiter=" ")
{
    return "Hello" . $name . $delimiter . $lastname;
}

echo hello("Yassin", "Malek", );
//echo add(true, false);
