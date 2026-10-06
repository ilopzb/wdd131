const pauseButton = document.querySelector(".pause-button");
const pauseMessage = document.querySelector(".pause-message");

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

if (pauseButton && pauseMessage) {
    pauseButton.addEventListener("click", togglePauseMessage);
}