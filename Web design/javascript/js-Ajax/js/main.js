function loadContent(url, loadData) {
    // AJAX = Asynchronous JavaScript And XML.
    // AJAX => XMLHttpRequest() 
    const xhttp = new XMLHttpRequest()

    // Do this after you get the response
    xhttp.onload = function () {
        loadData(this);
    }

    // perpare the request.
    // send the request to the server
    xhttp.open("GET", url);
    xhttp.send();
}

function loadData(xhttp) {
    if (xhttp.status === 200) {
        document.getElementById("content").innerHTML =
            xhttp.responseText;
    } else if (xhttp.status === 404) {
        document.getElementById("content").innerHTML =
            `Error ${xhttp.status} NOT FOUND`;
    }
}

const button = document.querySelector("button");
button.onclick = () => {
    loadContent("info.txt", loadData)
}

const email = document.querySelector("input[type=email]");
function fillEmail(xhttp) {
    email.setAttribute("value", xhttp.responseText);
}

loadContent("mail.txt", fillEmail)