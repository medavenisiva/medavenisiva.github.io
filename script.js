// Simple contact form handler (for demo only)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "Thanks for your message!";
  this.reset();
});
