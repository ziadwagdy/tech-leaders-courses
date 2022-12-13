let requiredInputs = document.querySelectorAll("input");


Array.from(requiredInputs).forEach((input) => {
    const span = document.createElement("span");
    span.innerText = "* requierd";
    span.className = "required-span";
    span.style.color="red";
    input.after(span);
  });