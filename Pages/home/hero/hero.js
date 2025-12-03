// ---------------- HERO TEXT ANIMATION ----------------

const animatedWord = document.getElementById('animated-word');
const words = ["Frontend"];
let index = 0;

function changeWord() {
    animatedWord.classList.remove("slide-down-in");
    animatedWord.classList.remove("slide-up-out");

    animatedWord.classList.add("slide-up-out");

    setTimeout(() => {
        animatedWord.textContent = words[index];
        animatedWord.classList.remove("slide-up-out");
        animatedWord.classList.add("slide-down-in");

        index = (index + 1) % words.length;
    }, 400);
}

animatedWord.classList.add("slide-down-in");
setInterval(changeWord, 2000);

// ---------------- LET'S TALK BUTTON REDIRECT ----------------
document.getElementById("contactBtn").addEventListener("click", () => {
    window.location.href = "../../contact.html";
});
