window.addEventListener("load", function () {
  const button = document.getElementById("btn");

  function myAlert() {
    window.alert("Hello!");
  }

  button.addEventListener("click", myAlert);

  // button.addEventListener("mouseenter", function () {
  //   document.body.style.backgroundColor = "black";
  // });

  // button.addEventListener("mouseleave", function () {
  //   document.body.style.backgroundColor = "white";
  // });

  // Task 2 : how to keep on the chosen Theme
  const dark = document.querySelector(".dark-mode");
  dark.addEventListener("click", function () {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  });

  const light = document.querySelector(".light-mode");
  light.addEventListener("click", function () {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  });

  // Task 1 : how to toggle the placeholder
  const text = this.document.querySelector("input[type=text]");
  text.addEventListener("focus", function (e) {
    e.target.setAttribute("placeholder", "");
  });

  text.addEventListener("blur", function (e) {
    e.target.setAttribute("placeholder", "Enter your name");
  });

  this.document.querySelector("ul").addEventListener("click", function (e) {
    let target = e.target;
    switch (target.id) {
      case "liOne":
        console.log("First Li");
        break;
      case "liTwo":
        console.log("Second Li");
        break;
      case "liThree":
        console.log("Third Li");
        break;
      case "liFour":
        console.log("Fourth Li");
        break;
    }
  });
});
