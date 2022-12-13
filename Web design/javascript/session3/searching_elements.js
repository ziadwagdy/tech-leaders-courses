const li = document.querySelectorAll("ul > li:last-child");
console.log(li);

li.forEach(element => {
    element.style.color = "blue";
});

for (let index = 0; index < li.length; index++) {
    if (index % 2 == 0) { 
        li[index].style.color = "red";
    }
}