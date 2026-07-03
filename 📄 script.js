// Al Quran Tadabburun Wa Amalun

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");
});

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("JazakAllahu Khair! Your admission request has been submitted successfully.");

        form.reset();
    });
}
