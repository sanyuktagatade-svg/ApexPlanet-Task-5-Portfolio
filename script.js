document.addEventListener("DOMContentLoaded", function () {

  // Automatically update the footer year
  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Highlight the active navigation link
  const sections = document.querySelectorAll("main section, main header");
  const navLinks = document.querySelectorAll("nav .links a");

  function updateActiveLink() {
    let currentSection = "home";

    sections.forEach(function (section) {
      if (window.scrollY >= section.offsetTop - 150) {
        currentSection = section.id;
      }
    });

    navLinks.forEach(function (link) {
      const isActive = link.getAttribute("href") === "#" + currentSection;
      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("scroll", updateActiveLink, {
    passive: true
  });

  updateActiveLink();

  // Smooth navigation when a menu link is clicked
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const target = document.querySelector(link.getAttribute("href"));

      if (target) {
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

});
