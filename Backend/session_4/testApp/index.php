<?php include "inc/header.php";?>
<?php include_once "functions.php"?>
<?php
    function render_article() : string
    {
        include "functions.php";
        if (isset($title) && isset($content)) {
            return "</article>
                    <h1>$title</h1>
                    <p>$content</p>
            </atricle>";
        }
        return "error happened";
    }
    echo render_article();
    /*
    TODO from a previous html/css/js project
        create a php project (using include, header, footer,....)
        next session => require : https://www.phptutorial.net/php-tutorial/php-require/
    */
?>
<?php include "inc/footer.php";