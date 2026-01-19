
function loadSection(containerId, htmlPath, cssPath, jsPath) {
    fetch(htmlPath)
        .then(res => res.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;

            if (cssPath) {
                const style = document.createElement("link");
                style.rel = "stylesheet";
                style.href = cssPath;
                document.head.appendChild(style);
            }

            if (jsPath) {
                const script = document.createElement("script");
                script.src = jsPath;
                document.body.appendChild(script);
            }
        });
}

document.addEventListener("DOMContentLoaded", () => {

  loadSection(
    "header-container",
    "components/header/header.html",
    "components/header/header.css",
    "components/header/header.js"
  );

  loadSection(
    "whoiam-container",
    "Pages/home/who_i_am/who_i_am.html",
    "Pages/home/who_i_am/who_i_am.css",
    "Pages/home/who_i_am/who_i_am.js"
  );

  loadSection(
    "skills-container",
    "Pages/home/skills/skills.html",
    "Pages/home/skills/skills.css",
    "Pages/home/skills/skills.js"
  );

  loadSection(
    "projects-container",
    "Pages/home/projects/home_projects.html",
    "Pages/home/projects/home_projects.css",
    "Pages/home/projects/home_projects.js"
  );

  loadSection(
    "work-process",
    "Pages/home/work_process/work_process.html",
    "Pages/home/work_process/work_process.css",
    "Pages/home/work_process/work_process.js"
  );

  loadSection(
    "contact",
    "Pages/home/contact_section/home_contact.html",
    "Pages/home/contact_section/home_contact.css",
    "Pages/home/contact_section/home_contact.js"
  );

  loadSection(
    "footer-container",
    "components/footer/footer.html",
    "components/footer/footer.css",
    "components/footer/footer.js"
  );

});

// global.js using for reveal animation
document.addEventListener("DOMContentLoaded", () => {
  const revealObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("active");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
});
