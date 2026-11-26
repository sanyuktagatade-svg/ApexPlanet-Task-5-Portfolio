document.addEventListener("DOMContentLoaded", function () {

    // 1. Automatic footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Active navigation highlighting
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

    // 3. Back to top button
    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        updateActiveLink();

        if (backToTop) {
            backToTop.classList.toggle(
                "show",
                window.scrollY > 300
            );
        }

    });

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 4. Scroll reveal animation
    const revealElements = document.querySelectorAll(
        "section:not(.hero) .card, section:not(.hero) h2, .gallery-item"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

});
