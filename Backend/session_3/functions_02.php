<?php
/*function multiply($a, $b){
    return $a * $b;
}*/

// anonymous function
// executed once -> as expression

/*function double_it($element){
    return $element * 2;
}*/

$numbers = [10, 15, 20];


$results = array_map(function ($number) {
    return $number * 2;
}, $numbers);
print_r($results);
echo '<br>';

$results = array_filter($numbers,
    function ($number) {
        return $number > 10;
    });

print_r($results);
echo '<br>';

// store a function in a variable
// invoke the function through the variable
$name = "Malek";
$welcome = function ($lastname) use ($name) {
    $name = "Yassin {$lastname}";
    echo "Hello, {$name}";
};

$welcome("Mohammed");
echo '<br>';
echo $name;
echo '<br>';


$welcome_again = function () use (&$name) {
    $name = "Yassin";
    echo "Hello, {$name}";
};

$welcome_again();
echo '<br>';
echo $name;


// Task : TODO : see in anonymous functions ( return an anonymous function from a function )
//function (...args){}

// Arrow functions
$numbers = [10, 20, 30];
$results = array_map(
    fn($number) => $number * 2, $numbers
);

echo '<br>';
function multiplier($x)
{
    return fn ($y) => $x * $y;
}

$double = multiplier(2);
echo $double(100);
echo '<br>';
$triple = multiplier(3);
echo $triple(100);

// Task : TODO : see in arrow functions ( return an arrow function from a function )
/* Task : TODO  in this Tutorial : https://www.phptutorial.net/
           Study till Section 11 (inclusive)
*/