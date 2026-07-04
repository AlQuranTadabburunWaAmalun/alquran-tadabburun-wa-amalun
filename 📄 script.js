document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      name: form.querySelector('input[placeholder="Student Name"]').value,
      age: form.querySelector('input[placeholder="Age"]').value,
      whatsapp: form.querySelector('input[placeholder="WhatsApp Number"]').value,
      country: form.querySelector('input[placeholder="Country"]').value,
      course: form.querySelector("select").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzYx2Iz1EqyrsrEl50v4mEf5VY_0otUi2PSinOr7LFU_ucVkjkk43Yrg3HrDeu_lU6qQw/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
    .then(() => {
      alert("JazakAllahu Khair! Your admission request has been submitted successfully.");
      form.reset();
    })
    .catch(() => {
      alert("Something went wrong. Please try again.");
    });

  });

});
