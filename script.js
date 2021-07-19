const form = document.getElementById("form");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

console.log(username.value);
