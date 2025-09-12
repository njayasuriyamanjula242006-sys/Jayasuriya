// Set current year
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("year").textContent = new Date().getFullYear();

  // Scroll to projects
  document.getElementById("viewWorkBtn").addEventListener("click", () => {
    document.querySelector(".projects").scrollIntoView({ behavior: "smooth" });
  });

  // Contact form submit
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    alert(`Message Sent!\n\nName: ${formData.get("name")}\nEmail: ${formData.get("email")}\nContact: ${formData.get("phone")}`);
  });
});