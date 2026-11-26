document.addEventListener("DOMContentLoaded", function () {

    // 1. Automatically update footer year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // 2. Highlight active navigation link
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

    // 3. Back-to-top button
    const backToTop = document.getElementById("backToTop");

    function handleScroll() {
        updateActiveLink();

        if (backToTop) {
            backToTop.classList.toggle(
                "show",
                window.scrollY > 300
            );
        }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    if (backToTop) {
        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // 4. Scroll reveal animations
    const revealElements = document.querySelectorAll(
        "section:not(.hero) .card, section:not(.hero) h2, .gallery-item"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }

                });

            },
            { threshold: 0.12 }
        );

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {
        revealElements.forEach(function (element) {
            element.classList.add("visible");
        });
    }

});
