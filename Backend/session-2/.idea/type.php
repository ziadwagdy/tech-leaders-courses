<?php
    $var = "100$"; // string => int
    $var1 = "ABC"; // string => int | float | real

    $var = (int) $var;
    echo $var;
    echo '</br>';

    // no casting : return 0
    $var1 = (int) $var1;
    echo $var1;

    // Type Juggling
    echo '</br>';
    echo 12 + '12$';