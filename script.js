// Basic form validation for the contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
  });
