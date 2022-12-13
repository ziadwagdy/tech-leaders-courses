const form = document.querySelector("form");
const userInput = document.querySelector("[name='username']");
const userPasswords = document.querySelector("[name='password']");

let errorMessages = [];
form.addEventListener("submit", valiate);

function valiate(event) {
  let isNameValid = false;
  let isPassowrdValid = false;

  if (userInput.value !== "" && userInput.value.length >= 10) {
    console.log(isNameValid);
  } else {
    errorMessages.push("Username is not Valid");
  }

  if (userPasswords.value !== "" && userPasswords.value.length >= 8) {
    isPassowrdValid = true;
  } else {
    errorMessages.push("Password is not Valid");
  }

  if (isNameValid === false || isPassowrdValid === false) {
    showErrors(errorMessages);
    event.preventDefault();
  }
}

function showErrors(array) {
  const div = document.createElement("div");
  div.className = "error";
  div.innerHTML = "";
  array.forEach((element) => {
    const error = document.createElement("p");
    error.innerText = element;
    div.appendChild(error);
    form.after(div);
  });
}

// task : 
//     Create more fields
//     create its validations
//     show errors if there are errors 
//     THINK about how to remove the errors before showing more errors!

// errorMessages = []
// function checkPass(value) {
//   if (!(value[0] === value[0].toUpperCase())) {
//     message = "Must be an Upper case";
//     errorMessages.push(message);
//     isValid = false;
//   }

//   if (!(value > 8)) {
//     message = "Password must be more than 8 chars";
//     errorMessages.push(message);
//     isValid = false;
//   }

//   return isValid;
// }

// checkPass("mypass");
// console.log(errorMessages);
