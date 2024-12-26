/// script.js
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("sticky");
          } else {
            entry.target.classList.remove("sticky");
          }
        });
      },
      {
        threshold:0.9, // Adjusted to make the sticky effect trigger slightly earlier
        rootMargin: "0px 0px -10% 0px" // Handles different screen sizes better
      }
    );
  
    cards.forEach((card) => observer.observe(card));
  });
  