    
    
    const revealElements = document.querySelectorAll(".reveal");
    window.addEventListener("scroll", () => {
        revealElements.forEach((reveal) => {

            const windowHeight = window.innerHeight;
            const elementTop = reveal.getBoundingClientRect().top;
            // Delay animation trigger
            const revealPoint = -200;

            if (elementTop < windowHeight - revealPoint) {
                reveal.classList.add("active");

                const fill = reveal.querySelector(".progress-fill");
                const text = reveal.querySelector(".progress-text");

                if (!fill || !text) return;

                if (!fill.classList.contains("animated")) {
                    const progressValue = parseInt(fill.dataset.progress);
                    fill.classList.add("animated");

                    fill.style.width = `${progressValue}%`;

                    let count = 0;
                    const interval = setInterval(() => {
                        count++;
                        text.textContent = count + "%";
                        if (count >= progressValue) clearInterval(interval);
                    }, 20);
                }
            }
        });
    });