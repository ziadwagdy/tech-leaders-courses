const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  localStorage.setItem("theme", "dark");
  sessionStorage.setItem("test", 1);
});


let temp = localStorage.getItem("theme");

if (temp === "dark") { 
    console.log(temp);
}