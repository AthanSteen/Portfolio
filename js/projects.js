document.addEventListener("DOMContentLoaded", () => {
    const projects = [{
        title: "Beach Blast",
        description: "A couch game multiplayer made in a team of 5 using Unity",
        image: "images/beachblast.jpg",
        link: "https://youtu.be/eHpFks5TAd8?si=o6NaBDsPZxFgx1Qu"
    }];

    const container = document.getElementById("projects-container");

    projects.forEach(project => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
      <div class="card-content">
        <h3>${project.title}</h3>
        <div>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Trailer</a>
        </div>
      </div>
      <img src="${project.image}" alt="${project.title} logo">
    `;

        container.appendChild(card);
    });
});