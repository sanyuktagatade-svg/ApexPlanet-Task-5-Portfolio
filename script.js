document.addEventListener("DOMContentLoaded", function () {

    // Automatically update the footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Highlight active navigation link
    const navLinks = document.querySelectorAll("nav a");
    const sections = document.querySelectorAll("section[id]");

    function updateActiveLink() {
        let currentSection = "home";

        sections.forEach(function (section) {
            if (window.scrollY >= section.offsetTop - 160) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(function (link) {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === "#" + currentSection
            );
        });
    }

    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();

});
