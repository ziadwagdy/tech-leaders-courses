//BOM -> Browser Object Model -> window
let myLocation = window.location;

document.querySelector("input").addEventListener("click",
    () => {
        // enable the back button 
        myLocation.replace("https://www.w3schools.com/");
        // assign() -> remove, no way back
    }
)

// History
let myHistory = window.history;

function goBack() {
    // same usage
    myHistory.back();
}

function goForward() {
    myHistory.forward();
}

// go (0) -> current window
// go () -> +n -> forward n pages
// go () -> -n -> back n pages
// search -> query string -> ?name=value
console.log(myLocation.search);

console.log(window.navigator.geolocation.getCurrentPosition);