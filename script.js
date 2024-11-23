// Basic form validation for the contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.querySelector(".email");
    if (email.value == "") alert("yaaaaaaaaaaaaaaaaaaay");
  });
