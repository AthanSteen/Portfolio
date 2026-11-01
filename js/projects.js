document.addEventListener("DOMContentLoaded", () => {
    // Professional work at MeepMeep Games
    const work = [{
            title: "V.O.L.T. Survivors",
            status: "In development",
            statusType: "live",
            role: "Game Developer",
            tagline: "1-4 player sci-fi bullet heaven roguelite",
            description: "Deploy as V.O.L.T. Operators, combine game-breaking weapon attachments and turn a basic pistol into a screen-clearing catastrophe. Online co-op where perks are auras, artifacts go to a team vote and the squad shares one revive pool.",
            tags: ["Online Co-op", "Roguelite", "Bullet Heaven", "Cross-platform MP"],
            image: "images/games/volt-survivors-header.jpg",
            screenshots: ["images/games/volt-survivors-1.jpg", "images/games/volt-survivors-2.jpg", "images/games/volt-survivors-3.jpg", "images/games/volt-survivors-4.jpg"],
            steam: "https://store.steampowered.com/app/4934810/VOLT_Survivors/",
            cta: "Wishlist on Steam"
        },
        {
            title: "Galactic Vault",
            status: "Released Mar 2026",
            statusType: "done",
            role: "Game Developer",
            tagline: "Movement shooter roguelike",
            description: "Sprint, slide and dash through high-tech vaults while building devastating weapons on the fly. Stack muzzles, scopes, magazines and charms mid-run for elemental combos and chaotic synergies, then take down multi-stage Vault Captains.",
            tags: ["Movement Shooter", "Roguelike", "Leaderboards", "Level Editor"],
            image: "images/games/galactic-vault-header.jpg",
            screenshots: ["images/games/galactic-vault-1.jpg", "images/games/galactic-vault-2.jpg", "images/games/galactic-vault-3.jpg", "images/games/galactic-vault-4.jpg"],
            steam: "https://store.steampowered.com/app/3585460/Galactic_Vault/",
            cta: "View on Steam"
        }
    ];

    const projects = [{
            title: "Bang Buddies",
            year: "Jam Winner",
            description: "Chaotic co-op Minesweeper made with the MeepMeep Games team in 2.5 days for the Xbox Game Camp Game Jam, where it won first place among the professional teams. One player on the ground scans and throws flares, the other flies the plane and drops bombs to clear the minefield.",
            tags: ["🏆 Jam Winner", "MeepMeep Games", "Local Co-op", "3D"],
            image: "images/itch/bangbuddies-cover.jpg",
            embed: "",
            link: "https://meepmeepgames.itch.io/bang-buddies",
            screenshots: ["images/itch/bangbuddies-2.jpg", "images/itch/bangbuddies-3.jpg"],
            isAdditional: false
        },
        {
            title: "Operation: Immagination",
            year: "MyMachine",
            description: "A cozy spy adventure made as a team of eight with MyMachine Flanders. You play a clumsy spy who broke every invention in a top-secret facility. Sneak past guards and repair the gadgets to escape. Many items are based on 24 original drawings made by kids.",
            tags: ["Unity", "Team Project", "Adventure"],
            image: "images/itch/immagination-1.jpg",
            embed: "",
            link: "https://puorferret.itch.io/operation-immagination",
            screenshots: ["images/itch/immagination-2.jpg", "images/itch/immagination-3.jpg", "images/itch/immagination-cover.jpg"],
            isAdditional: false
        },
        {
            title: "Colorblindness Accessibility",
            year: "Bachelor Thesis",
            description: "Research into how customizable color features and adaptive modes improve gameplay for colorblind (CVD) and non-CVD players. Built a 2D match-3 prototype with multiple accessibility modes, custom color sliders and playtest data collection.",
            tags: ["Research", "Accessibility", "2D"],
            image: "images/itch/colorblind-1.jpg",
            embed: "",
            link: "https://athansteen.itch.io/colorblindness-accessibility-research-bachelor-thesis",
            screenshots: ["images/itch/colorblind-2.jpg", "images/itch/colorblind-cover.jpg"],
            isAdditional: false
        },
        {
            title: "Beach Blast",
            year: "2025",
            description: "Team-based Unity couch game with controller support and local co-op. Implemented core gameplay systems (player movement, interaction logic) and handled debugging and gameplay flow. Developed solo as the sole programmer alongside four artists.",
            tags: ["Unity", "C#", "Local Co-op"],
            image: "images/beachblast.jpg",
            embed: '',
            link: "https://finnbogaertdesign.itch.io/group29beachblast",
            screenshots: ["images/beachblast.gif"],
            isAdditional: false
        },
        {
            title: "PPGA Game",
            year: "2024",
            description: "A 2D prototype exploring Plane Projective Geometric Algebra. Implemented geometric transformations such as ‘screw motion’ and ‘orbiting’ through C++ scripting.",
            tags: ["C++", "Math"],
            image: "",
            embed: "",
            link: "",
            screenshots: ["images/ppga.gif"],
            isAdditional: false
        },
        {
            title: "Monami",
            year: "2023",
            description: "Developed a C# RPG using the .NET framework with a MySQL backend. Implemented turn-based combat and tile-based movement.",
            tags: ["C#", ".NET", "MySQL"],
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
            tags: ["Blender", "3D"],
            image: "images/diorama.jpg",
            embed: '<div class="sketchfab-embed-wrapper"><iframe title="DAE Diorama retake: Small farm" frameborder="0" allowfullscreen allow="autoplay; fullscreen; xr-spatial-tracking" loading="lazy" src="https://sketchfab.com/models/5613acfcaa374637b80af8073d4e7f10/embed"></iframe></div>',
            link: "https://sketchfab.com/3d-models/dae-diorama-retake-small-farm-5613acfcaa374637b80af8073d4e7f10",
            screenshots: [],
            isAdditional: true
        },
        {
            title: "Web Tool cHillegem",
            year: "2022-2023",
            description: "Developed a full-stack web tool for a hobby restaurant to manage recipes and guest scheduling. Built with HTML, CSS, JavaScript, PHP, and MySQL.",
            tags: ["PHP", "MySQL", "JavaScript"],
            image: "images/cHillegemLogo.jpg",
            embed: "",
            link: "",
            screenshots: ["images/cHillegemMenus.jpg"],
            isAdditional: true
        }
    ];

    const workContainer = document.getElementById("work-container");
    const mainContainer = document.getElementById("projects-container");
    const additionalContainer = document.getElementById("additional-projects-container");

    // Lightbox with prev/next navigation through a card's gallery
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox";
    lightbox.innerHTML = `
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <button class="lightbox-nav prev" aria-label="Previous image">‹</button>
        <img src="" alt="Fullscreen image">
        <button class="lightbox-nav next" aria-label="Next image">›</button>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector("img");
    let gallery = [];
    let galleryIndex = 0;

    const showImage = (i) => {
        galleryIndex = (i + gallery.length) % gallery.length;
        lightboxImg.src = gallery[galleryIndex].src;
        lightboxImg.alt = gallery[galleryIndex].alt;
        lightbox.classList.toggle("single", gallery.length < 2);
    };

    const openLightbox = (images, i) => {
        gallery = images;
        showImage(i);
        lightbox.classList.add("active");
    };

    const closeLightbox = () => lightbox.classList.remove("active");

    lightbox.addEventListener("click", (e) => {
        if (e.target.classList.contains("prev")) showImage(galleryIndex - 1);
        else if (e.target.classList.contains("next")) showImage(galleryIndex + 1);
        else if (e.target !== lightboxImg) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showImage(galleryIndex - 1);
        if (e.key === "ArrowRight") showImage(galleryIndex + 1);
    });

    function bindGallery(card) {
        const thumbs = [...card.querySelectorAll(".screenshot-thumb")];
        thumbs.forEach((thumb, i) => thumb.addEventListener("click", () => openLightbox(thumbs, i)));
    }

    const tagsHTML = (tags = []) => tags.map(t => `<span class="tag">${t}</span>`).join("");

    function createWorkCard(game) {
        const card = document.createElement("article");
        card.className = "work-card";

        const screenshotsHTML = game.screenshots
            .map((s, i) => `<img src="${s}" alt="${game.title} screenshot ${i + 1}" class="screenshot-thumb" loading="lazy">`)
            .join("");

        card.innerHTML = `
            <a class="work-cover" href="${game.steam}" target="_blank">
                <img src="${game.image}" alt="${game.title} key art">
            </a>
            <div class="work-body">
                <div class="work-meta">
                    <span class="status status-${game.statusType}">${game.status}</span>
                    <span class="studio">MeepMeep Games · ${game.role}</span>
                </div>
                <h3>${game.title}</h3>
                <p class="tagline">${game.tagline}</p>
                <p>${game.description}</p>
                <div class="tags">${tagsHTML(game.tags)}</div>
                <div class="screenshotsContainer">${screenshotsHTML}</div>
                <a class="btn btn-steam" href="${game.steam}" target="_blank">${game.cta} →</a>
            </div>
        `;

        bindGallery(card);
        return card;
    }

    function createProjectCard(project) {
        const card = document.createElement("article");
        card.className = "card";

        const cover = project.image || project.screenshots[0];
        const screenshotsHTML = project.screenshots
            .map((s, i) => `<img src="${s}" alt="${project.title} screenshot ${i + 1}" class="screenshot-thumb" loading="lazy">`)
            .join("");

        card.innerHTML = `
            ${project.embed ? project.embed : cover ? `<div class="card-cover"><img src="${cover}" alt="${project.title}" loading="lazy"></div>` : ""}
            <div class="card-content">
                <h3>${project.title} <span class="project-year">${project.year}</span></h3>
                <p>${project.description}</p>
                <div class="tags">${tagsHTML(project.tags)}</div>
                ${screenshotsHTML ? `<div class="screenshotsContainer">${screenshotsHTML}</div>` : ""}
                ${project.link ? `<a class="card-link" href="${project.link}" target="_blank">See more →</a>` : ""}
            </div>
        `;

        // Clicking the cover opens the gallery too
        const coverImg = card.querySelector(".card-cover img");
        if (coverImg) {
            coverImg.addEventListener("click", () => openLightbox([coverImg, ...card.querySelectorAll(".screenshot-thumb")], 0));
        }

        bindGallery(card);
        return card;
    }

    work.forEach(game => workContainer.appendChild(createWorkCard(game)));

    projects.forEach(project => {
        const card = createProjectCard(project);
        (project.isAdditional ? additionalContainer : mainContainer).appendChild(card);
    });
});
