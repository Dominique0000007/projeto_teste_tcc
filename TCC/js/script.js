// Add event listener to button clicks
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            // Handle button clicks here
            console.log("Button clicked!");
        });
    });
});

// Add event listener to form submissions
const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted!");
});

// Add event listener to iframe clicks (if needed)
const iframe = document.querySelector("iframe");

iframe.addEventListener("click", function(event) {
    // Handle iframe clicks here
    console.log("iFrame clicked!");
});