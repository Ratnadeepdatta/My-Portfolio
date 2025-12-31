// ---------------- HERO TEXT ANIMATION ----------------

const word = "Developer";
const textEl = document.getElementById("text");

let index = 0;
let isDeleting = false;

function animate() {
    if (!isDeleting) {
        // TYPE LEFT → RIGHT
        textEl.textContent = word.substring(0, index + 1);
        index++;

        if (index === word.length) {
            isDeleting = true;
            setTimeout(animate, 1900);
            return;
        }
    } else {
        // DELETE RIGHT → LEFT
        textEl.textContent = word.substring(0, index - 1);
        index--;

        if (index === 0) {
            isDeleting = false;
            setTimeout(animate, 60);
            return;
        }
    }

    const speed = isDeleting ? 60 : 70;
    setTimeout(animate, speed);
}

animate();


// ---------------- LET'S TALK BUTTON REDIRECT ----------------
// document.getElementById("contactBtn").addEventListener("click", () => {
//     window.location.href = "../../contact.html";
// });

const contactBtn = document.getElementById("contactBtn");
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    window.location.href = "/#contact";
  });
}




