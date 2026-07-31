"use strict";

const currentYearElement = document.getElementById("current-year");

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Message sending isn't connected yet!");
});