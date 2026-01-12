    
    
    // const revealElements = document.querySelectorAll(".reveal");
    // window.addEventListener("scroll", () => {
    //     revealElements.forEach((reveal) => {

    //         const windowHeight = window.innerHeight;
    //         const elementTop = reveal.getBoundingClientRect().top;
    //         // Delay animation trigger
    //         const revealPoint = -200;

    //         if (elementTop < windowHeight - revealPoint) {
    //             reveal.classList.add("active");

    //             const fill = reveal.querySelector(".progress-fill");
    //             const text = reveal.querySelector(".progress-text");

    //             if (!fill || !text) return;

    //             if (!fill.classList.contains("animated")) {
    //                 const progressValue = parseInt(fill.dataset.progress);
    //                 fill.classList.add("animated");

    //                 fill.style.width = `${progressValue}%`;

    //                 let count = 0;
    //                 const interval = setInterval(() => {
    //                     count++;
    //                     text.textContent = count + "%";
    //                     if (count >= progressValue) clearInterval(interval);
    //                 }, 20);
    //             }
    //         }
    //     });
    // });

    window.initSkillsProgress = function () {
  const revealElements = document.querySelectorAll("#skills .skill-item");

  if (!revealElements.length) {
    console.warn("Skills section not found yet.");
    return;
  }

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("active");

      const fill = entry.target.querySelector(".progress-fill");
      const text = entry.target.querySelector(".progress-text");

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

      // run only once
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.25 });

  revealElements.forEach((el) => revealObserver.observe(el));
};
