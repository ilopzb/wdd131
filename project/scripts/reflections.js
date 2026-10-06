const archiveReflectionGrid = document.querySelector(
    "#archive-reflection-grid"
);

const categoryButtons = document.querySelectorAll(".category-button");

const emptyCategoryMessage = document.querySelector(
    ".empty-category-message"
);

const sortedPosts = [...posts].sort(function (a, b) {
    return new Date(b.dateValue) - new Date(a.dateValue);
});

function getSavedReflections() {
    const savedReflections = localStorage.getItem("savedReflections");

    if (savedReflections) {
        return JSON.parse(savedReflections);
    }

    return [];function getSavedReflections() {
    const savedReflections = localStorage.getItem("savedReflections");

    if (!savedReflections) {
        return [];
    }

    try {
        return JSON.parse(savedReflections);
    } catch {
        return [];
    }
}
}

function saveReflections(savedReflections) {
    localStorage.setItem(
        "savedReflections",
        JSON.stringify(savedReflections)
    );
}

function isReflectionSaved(postUrl) {
    const savedReflections = getSavedReflections();

    return savedReflections.includes(postUrl);
}

function toggleSavedReflection(postUrl) {
    let savedReflections = getSavedReflections();

    if (savedReflections.includes(postUrl)) {
        savedReflections = savedReflections.filter(function (url) {
            return url !== postUrl;
        });
    } else {
        savedReflections.push(postUrl);
    }

    saveReflections(savedReflections);
}

function createReflectionCard(post) {
    const article = document.createElement("article");
    const saved = isReflectionSaved(post.url);

    article.classList.add("reflection-card");

    article.innerHTML = `
        <img
            class="card-image"
            src="${post.image}"
            alt="${post.alt}"
            loading="lazy"
        >

        <p class="card-details">
            ${post.category} · ${post.date} · ${post.readTime}
        </p>

        <h2>${post.title}</h2>

        <p>${post.description}</p>

        <div class="reflection-card-actions">
            <a href="${post.url}">
                Read reflection
            </a>

            <button
                class="save-reflection-button"
                type="button"
                data-url="${post.url}"
                aria-pressed="${saved}"
            >
                ${saved ? "♥ Saved" : "♡ Save reflection"}
            </button>
        </div>
    `;

    return article;
}

function addSaveButtonEvents() {
    const saveButtons = document.querySelectorAll(
        ".save-reflection-button"
    );

    saveButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const postUrl = button.dataset.url;

            toggleSavedReflection(postUrl);

            const saved = isReflectionSaved(postUrl);

            button.textContent = saved
                ? "♥ Saved"
                : "♡ Save reflection";

            button.setAttribute(
                "aria-pressed",
                saved
            );
        });
    });
}

function renderPosts(postsToRender) {
    if (!archiveReflectionGrid) {
        return;
    }

    archiveReflectionGrid.innerHTML = "";

    postsToRender.forEach(function (post) {
        const article = createReflectionCard(post);
        archiveReflectionGrid.appendChild(article);
    });

    addSaveButtonEvents();
}

function filterPosts(selectedCategory) {
    let filteredPosts;

    if (selectedCategory === "all") {
        filteredPosts = sortedPosts;
    } else {
        filteredPosts = sortedPosts.filter(function (post) {
            return post.category.toLowerCase() === selectedCategory;
        });
    }

    renderPosts(filteredPosts);

    emptyCategoryMessage.hidden =
        filteredPosts.length !== 0;
}

function updateActiveButton(selectedButton) {
    categoryButtons.forEach(function (button) {
        button.classList.remove("active");
        button.setAttribute("aria-pressed", "false");
    });

    selectedButton.classList.add("active");
    selectedButton.setAttribute("aria-pressed", "true");
}

categoryButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        const selectedCategory =
            button.dataset.filter;

        updateActiveButton(button);

        filterPosts(selectedCategory);
    });
});

renderPosts(sortedPosts);