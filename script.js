"use strict";

const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.querySelector(".error");
const redMark = document.querySelector(".red-mark");
const body = document.querySelector("body");

function init() {
  email.style.border = "solid 0.1rem rgb(206, 151, 151)";
  redMark.classList.remove("xmark");
  email.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkEmail();
});

form.addEventListener("click", function (e) {
  e.stopPropagation();
});

function checkEmail() {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {
    init();
    redMark.classList.remove("xmark");
    error.innerHTML = "Your email subscription is successful";
    error.style.opacity = 1;
    error.style.color = "green";
  } else {
    redMark.classList.add("xmark");
    error.innerHTML = `Please provide a valid email`;
    error.style.opacity = 1;
    error.style.color = "red";
    email.style.border = "solid 0.25rem red";
  }
}

body.addEventListener("click", function () {
  error.style.opacity = 0;
  init();
});

email.addEventListener("click", function () {
  error.style.opacity = 0;
  redMark.classList.remove("xmark");
  email.style.border = "solid 0.1rem rgb(206, 151, 151)";
});
