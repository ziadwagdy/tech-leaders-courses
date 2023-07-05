<?php

//setcookie(
//    string $name ,
//    string $value = "" ,
//    int $expires = 0 ,
//    string $path = "" ,
//    string $domain = "" ,
//    bool $secure = false ,
//    bool $httponly = false
//);

const ONE_WEEK = 7 * 86400; // define a constant with name of ONE_WEEK

$returning_visitor = false;

// if there is a cookie "no welcome", welcome back!
// if there is no cookie : show first welcome message, setcookie()
if (!isset($_COOKIE['return'])) {
    setcookie('return', '1', time() + ONE_WEEK);
} else {
    $returning_visitor = true;
}

// ternary operator
echo $returning_visitor ? 'Welcome back!' : "Welcome to my website!";