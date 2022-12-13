let listItems = document.getElementsByTagName("li");
const liFirstChild = document.querySelector("li:first-child");

let listItemsNew = document.getElementsByClassName("item-list");
let requiredInputs = document.querySelectorAll("input[required]");

// converting from HTMLCollectin into array
listItems = Array.from(listItems);
listItems.forEach((item) => {
  // item.style.backgroundColor = "red";
});

Array.from(requiredInputs).forEach((input) => {
  const span = document.createElement("span");
  span.innerText = "* requierd";
  span.className = "required-span";
  input.after(span);
});

function resetUl() {
  const myList = document.getElementById("mylist");
  myList.style.backgroundColor = "blue";
}

resetUl();
