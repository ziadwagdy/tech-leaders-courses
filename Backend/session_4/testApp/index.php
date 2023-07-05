<?php
session_start();

$_SESSION['user'] = 'admin';

$_SESSION['roles'] = ['administrator', 'editor', 'approver']

?>
<?php include "inc/header.php"; ?>
<?php include_once "functions.php" ?>
<?php require "cookies.php" ?>
<?php
    if (isset($_SESSION['user'])){
        echo 'Welcome, ' . $_SESSION['user'];
    }

    if (isset($_SESSION['roles'])){
        echo "<h1>Your current roles: </h1>";
        foreach ($_SESSION['roles'] as $role) {
            echo "<h4>". $role . "</h4>";
        }
    }
//    TODO : upload your apps on github
//      create a repo (main will be empty README.md): create a branch named dev (will contain the code)
//    TODO : create your website using php.
//    TODO : read the tutorial : https://www.phptutorial.net/  - from before to .. section 13
?>
<?php include "inc/footer.php";