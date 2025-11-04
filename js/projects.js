document.addEventListener("DOMContentLoaded", () => {
            const projects = [{
                    title: "Beach Blast",
                    year: "2025",
                    description: "Team-based Unity couch game with controller support and local co-op. Implemented core gameplay systems (player movement, interaction logic) and handled debugging and gameplay flow. Developed solo as the sole programmer alongside four artists.",
                    image: "images/beachblast.jpg",
                    embed: '',
                    link: "https://finnbogaertdesign.itch.io/group29beachblast",
                    screenshots: ["images/beachblast.gif"],
                    isAdditional: false
                },
                {
                    title: "Monami",
                    year: "2023",
                    description: "Developed a C# RPG using the .NET framework with a MySQL backend. Implemented turn-based combat and tile-based movement.",
                    image: "",
                    embed: "",
                    link: "",
                    screenshots: ["images/monamiOW.jpg", "images/monamiBattle.jpg"],
                    isAdditional: false
                },
                {
                    title: "Farm Diorama",
                    year: "2024",
                    description: "Modeled and textured a small farm diorama in Blender while learning the fundamentals of 3D modeling and texturing. Published on Sketchfab for interactive viewing.",
                    image: "images/diorama.jpg",
                    embed: '<div class="sketchfab-embed-wrapper"> <iframe title="DAE Diorama retake – Small farm" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/5613acfcaa374637b80af8073d4e7f10/embed"> </iframe> <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;"> <a href="https://sketchfab.com/3d-models/dae-diorama-retake-small-farm-5613acfcaa374637b80af8073d4e7f10?utm_medium=embed&utm_campaign=share-popup&utm_content=5613acfcaa374637b80af8073d4e7f10" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> DAE Diorama retake – Small farm </a> by <a href="https://sketchfab.com/athansteen?utm_medium=embed&utm_campaign=share-popup&utm_content=5613acfcaa374637b80af8073d4e7f10" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;"> athansteen </a> on <a href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=5613acfcaa374637b80af8073d4e7f10" target="_blank" rel="nofollow" style="font-weight: bold; color: #1CAAD9;">Sketchfab</a></p></div>',
                    link: "",
                    screenshots: [],
                    isAdditional: true
                },
                {
                    title: "Web Tool cHillegem",
                    year: "2022-2023",
                    description: "Developed a full-stack web tool for a hobby restaurant to manage recipes and guest scheduling. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
                    image: "images/cHillegemLogo.jpg",
                    embed: "",
                    link: "",
                    screenshots: ["images/cHillegemMenus.jpg"],
                    isAdditional: true
                },
                {
                    title: "PPGA Game",
                    year: "2024",
                    description: "A 2D prototype exploring Plane Projective Geometric Algebra. Implemented geometric transformations such as ‘screw motion’ and ‘orbiting’ through C++ scripting.",
                    image: "",
                    embed: "",
                    link: "",
                    screenshots: ["images/ppga.gif"],
                    isAdditional: false
                }
            ];

            const mainContainer = document.getElementById("projects-container");
            const additionalContainer = document.getElementById("additional-projects-container");

            // Create lightbox element
            const lightbox = document.createElement("div");
            lightbox.className = "lightbox";
            lightbox.innerHTML = `
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Fullscreen image">
    `;
            document.body.appendChild(lightbox);

            const lightboxImg = lightbox.querySelector("img");
            const closeBtn = lightbox.querySelector(".lightbox-close");

            // Close lightbox when clicking on background or close button
            lightbox.addEventListener("click", (e) => {
                if (e.target === lightbox || e.target === closeBtn) {
                    lightbox.classList.remove("active");
                }
            });

            // Close on Escape key
            document.addEventListener("keydown", (e) => {
                if (e.key === "Escape") {
                    lightbox.classList.remove("active");
                }
            });

            function createProjectCard(project) {
                const card = document.createElement("div");
                card.className = "card";

                // Generate screenshots HTML
                const screenshotsHTML = project.screenshots
                    .map((screenshot, i) => `<img src="${screenshot}" alt="${project.title} screenshot ${i + 1}" class="screenshot-thumb">`)
                    .join('');

                card.innerHTML = `
            <div class="card-content">
                <h3>${project.title} <span class="project-year">${project.year}</span></h3>
                <div>
                    <p>${project.description}</p>
                    <div class="screenshotsContainer">
                        ${screenshotsHTML}
                    </div>
                    ${project.embed ? project.embed : ''}
                    ${project.link ? `<a href="${project.link}" target="_blank">See more</a>` : ''}
                </div>
            </div>
            ${project.image ? `<img src="${project.image}" alt="${project.title} logo">` : ''}
        `;

        // Add click listeners to all screenshot thumbnails in this card
        const thumbnails = card.querySelectorAll(".screenshot-thumb");
        thumbnails.forEach(thumb => {
            thumb.addEventListener("click", () => {
                lightboxImg.src = thumb.src;
                lightboxImg.alt = thumb.alt;
                lightbox.classList.add("active");
            });
        });

        return card;
    }

    // Separate projects into main and additional
    projects.forEach(project => {
        const card = createProjectCard(project);
        
        if (project.isAdditional) {
            additionalContainer.appendChild(card);
        } else {
            mainContainer.appendChild(card);
        }
    });
});