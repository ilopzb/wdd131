const pauseButton = document.querySelector(".pause-button");
const pauseMessage = document.querySelector(".pause-message");
const homeReflectionGrid = document.querySelector("#home-reflection-grid");
const latestReflectionLink = document.querySelector("#latest-reflection-link");

function togglePauseMessage() {
    const messageIsHidden = pauseMessage.hidden;

    pauseMessage.hidden = !messageIsHidden;

    if (messageIsHidden) {
        pauseButton.textContent = "Return to the page";

        pauseMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    } else {
        pauseButton.textContent = "Take a pause";
    }
}

function getLatestPosts() {
    return [...posts]
        .sort(function (a, b) {
            return new Date(b.dateValue) - new Date(a.dateValue);
        })
        .slice(0, 3);
}

function createReflectionCard(post) {
    return `
        <article class="reflection-card">
            <img
                class="card-image"
                src="${post.image}"
                alt="${post.alt}"
                loading="lazy"
            >

            <p class="card-details">
                ${post.category} · ${post.date} · ${post.readTime}
            </p>

            <h3>${post.title}</h3>

            <p>${post.description}</p>

            <a href="${post.url}">
                Read reflection
            </a>
        </article>
    `;
}

function renderLatestPosts() {
    const latestPosts = getLatestPosts();

    homeReflectionGrid.innerHTML = latestPosts
        .map(function (post) {
            return createReflectionCard(post);
        })
        .join("");

    if (latestPosts.length > 0) {
        latestReflectionLink.href = latestPosts[0].url;
    } else {
        latestReflectionLink.href = "reflections.html";
    }
}

if (pauseButton && pauseMessage) {
    pauseButton.addEventListener("click", togglePauseMessage);
}

if (homeReflectionGrid && latestReflectionLink) {
    renderLatestPosts();
}