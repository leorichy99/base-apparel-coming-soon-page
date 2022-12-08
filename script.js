const email = document.querySelector(".email");
const input = document.querySelector('.input');
const errorMsg = document.querySelector(".error_message");
const errorIcon = document.querySelector(".error-icon");
const errors = ["#", "$", "1"];

// show error message when user's email has any of the elements of the errors array in it
email.addEventListener("input", (e) => {
  if (e.target.value.includes(errors[0]) || e.target.value.includes(errors[1]) || e.target.value.includes(errors[2])) {
    input.classList.add('error');
  } else {
    input.classList.remove('error');
  }
});
