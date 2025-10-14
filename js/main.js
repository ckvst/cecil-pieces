// 🌸 Cecil's Pieces - main.js
// This script adds soft interactivity and motion to your poetry site

document.addEventListener("DOMContentLoaded", () => {
  console.log("✨ Cecil's Pieces loaded successfully ✨");

  // Fade-in effect for the hero section and main content
  const fadeElements = document.querySelectorAll(".hero, .about, .poem, .poem-list, .contact");
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1.5s ease";
    setTimeout(() => {
      el.style.opacity = 1;
    }, 200);
  });

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // Optional: Soft greeting alert for visitors (only on homepage)
  if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
    setTimeout(() => {
      const greeting = document.createElement("div");
      greeting.textContent = "Welcome, dear reader. May you find solace in these words.";
      greeting.style.position = "fixed";
      greeting.style.bottom = "20px";
      greeting.style.right = "20px";
      greeting.style.padding = "10px 15px";
      greeting.style.background = "#1b1b1b";
      greeting.style.color = "#ffb6b9";
      greeting.style.borderRadius = "5px";
      greeting.style.fontFamily = "'Georgia', serif";
      greeting.style.opacity = "0";
      greeting.style.transition = "opacity 1s";
      document.body.appendChild(greeting);

      setTimeout(() => (greeting.style.opacity = "1"), 300);
      setTimeout(() => greeting.remove(), 4000);
    }, 1200);
  }
});