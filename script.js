const passwordBoxTag = document.getElementById("password");
const btnTag = document.querySelector(".btna");
const copybtnTag = document.querySelector(".copybtn");
const lenght = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUWXYZ";
const lowerCase = "abcdefghijklnopqrstuwxyz";
const number = "0123456789";
const smbol = "@#$%&!";
const ansple = upperCase + lowerCase + number + smbol;

function randonPassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += smbol[Math.floor(Math.random() * smbol.length)];
  while (lenght > password.length) {
    password += ansple[Math.floor(Math.random() * ansple.length)];
    passwordBoxTag.value = password;
  }
}

btnTag.addEventListener("click", () => {
  randonPassword();
  console.log("asdasd");
});
copybtnTag.addEventListener("click", () => {
  passwordBoxTag.select();
  document.execCommand("copy");
});
