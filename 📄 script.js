document.addEventListener("DOMContentLoaded", function () {

  const form = document.querySelector("form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const data = {
      name: form.querySelector('input[placeholder="Student Name"]').value,
      age: form.querySelector('input[placeholder="Age"]').value,
      whatsapp: form.querySelector('input[placeholder="WhatsApp Number"]').value,
      country: form.querySelector('input[placeholder="Country"]').value,
      course: form.querySelector("select").value
    };

    try {

      const response = await fetch("https://script.google.com/macros/s/AKfycbzYx2Iz1EqyrsrEl50v4mEf5VY_0otUi2PSinOr7LFU_ucVkjkk43Yrg3HrDeu_lU6qQw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        alert("✅ JazakAllahu Khair! Your admission request has been submitted successfully.");
        form.reset();
      } else {
        alert("❌ Submission failed. Please try again.");
      }

    } catch (error) {
      alert("❌ Network error. Please check your internet connection.");
      console.error(error);
    }

  });

});
