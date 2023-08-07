import "../styles/modern-normalize.css";
import "../styles/components/main.css";
import "../styles/style.css";
import "../styles/utils.css";

const inputs = document.querySelectorAll("input");
const patterns = {
  firstname: /^[a-z\s\d]{2,50}$/i,
  lastname: /^[a-z\s\d]{2,50}$/i,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
  phone: /^[0-9]{11}$/,
  password: /^[\.\w@-]{8,20}$/i,
};

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = "valid";
  } else {
    field.className = "invalid";
  }
}

inputs.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    let valuedName = event.target.attributes.name.value;

    if (valuedName === "confirmPassword") return;

    validate(event.target, patterns[valuedName]);
  });
});

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

password.addEventListener("keyup", handleComparison);
confirmPassword.addEventListener("keyup", handleComparison);

function handleComparison(event) {
  const value1 = password.value;
  const value2 = confirmPassword.value;

  if (value1 === value2) {
    confirmPassword.className = "valid";
  } else {
    confirmPassword.className = "invalid";
  }
}
