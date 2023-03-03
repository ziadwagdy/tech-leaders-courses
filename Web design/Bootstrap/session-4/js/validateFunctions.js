// Fetch the form to be validated
const forms = document.querySelectorAll(".needs-validation");

Array.prototype.slice.call(forms).forEach(function (form) {
  form.addEventListener('submit', function (event) {
    // stop the default -> prevent default!
    // if form is not valid!
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add("was-validated");
  });
});



