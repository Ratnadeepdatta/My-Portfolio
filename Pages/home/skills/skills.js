

//     console.log("Skills progress loaded");

// const skillItems = document.querySelectorAll(".skill-item");

// const skillObserver = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting) return;

//       const item = entry.target;
//       const fill = item.querySelector(".progress-fill");
//       const text = item.querySelector(".progress-text");

//       if (!fill || !text) return;

//       // Run only once
//       if (fill.classList.contains("animated")) return;

//       fill.classList.add("animated");

//       const progressValue = parseInt(fill.dataset.progress, 10) || 0;
//       fill.style.width = progressValue + "%";

//       let count = 0;
//       const interval = setInterval(() => {
//         count++;
//         text.textContent = count + "%";

//         if (count >= progressValue) {
//           clearInterval(interval);
//         }
//       }, 20);

//       observer.unobserve(item); // only once
//     });
//   },
//   { threshold: 0.3 }
// );

// skillItems.forEach(item => skillObserver.observe(item));


const items = document.querySelectorAll(".skill-item");

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const fill = entry.target.querySelector(".progress-fill");
    const text = entry.target.querySelector(".progress-text");
    if (!fill || !text || fill.classList.contains("animated")) return;

    fill.classList.add("animated");

    const target = parseInt(fill.dataset.progress, 10) || 0;
    fill.style.width = target + "%";

    let start = null;
    const duration = 800;

    const count = (t) => {
      if (!start) start = t;
      const p = Math.min((t - start) / duration, 1);
      text.textContent = Math.floor(p * target) + "%";
      if (p < 1) requestAnimationFrame(count);
    };

    requestAnimationFrame(count);
    skillObserver.unobserve(entry.target);
  });
}, { threshold: 0.3 });

items.forEach((item) => skillObserver.observe(item));
