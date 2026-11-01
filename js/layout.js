document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer>
      © <span id="year"></span> Athan Van den Steen, Game Developer at MeepMeep Games
    </footer>
  `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);
    document.getElementById("year").textContent = new Date().getFullYear();

    // Mobile nav toggle
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
        const open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open);
    });
    document.querySelectorAll(".site-nav a").forEach(a =>
        a.addEventListener("click", () => header.classList.remove("nav-open"))
    );

    // Header background once scrolled past the hero top
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Highlight the nav link of the section in view
    const links = [...document.querySelectorAll(".site-nav a[href^='#']")];
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${entry.target.id}`));
        });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("section[id]").forEach(s => observer.observe(s));

    // Fade sections in as they scroll into view
    const reveal = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                reveal.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });
    document.querySelectorAll(".section").forEach(s => {
        s.classList.add("reveal");
        reveal.observe(s);
    });
});
