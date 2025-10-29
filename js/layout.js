document.addEventListener("DOMContentLoaded", () => {
    const footerHTML = `
    <footer>
      © <span id="year"></span> Van den Steen Athan — Game Developer
      <div id="current-time" style="font-size:0.9em;color:#888;margin-top:0.3rem;"></div>
    </footer>
  `;
    document.body.insertAdjacentHTML("beforeend", footerHTML);

    // Update year and time
    const yearEl = document.getElementById("year");
    const timeEl = document.getElementById("current-time");

    const updateTime = () => {
        const now = new Date();
        yearEl.textContent = now.getFullYear();
        timeEl.textContent = now.toLocaleString();
    };

    updateTime();
    setInterval(updateTime, 1000); // update every second
});