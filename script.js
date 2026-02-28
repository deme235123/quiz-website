function generateScore() {
    return Math.floor(Math.random() * 10) + 1;
}

function updateScore() {
    document.getElementById("scoreNumber").textContent = generateScore();
}

document.getElementById("playAgain").addEventListener("click", updateScore);

updateScore();

const toggleBtn = document.getElementById("modeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "Light Mode";
    } else {
        toggleBtn.textContent = "Dark Mode";
    }
});

