
window.loadSection = function (containerId, htmlPath, cssPath, jsPath) {
  const container = document.getElementById(containerId);

  if (!container) {
    console.warn(`Container not found: ${containerId}`);
    return;
  }

  fetch(htmlPath)
    .then(res => {
      if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;

      // ---------- CSS ----------
      if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssPath;
        document.head.appendChild(link);
      }

      // ---------- JS ----------
      if (jsPath && !document.querySelector(`script[src="${jsPath}"]`)) {
        const script = document.createElement("script");
        script.src = jsPath;
        script.defer = true;
        document.body.appendChild(script);
      }
    })
    .catch(err => console.error(err));
};




document.addEventListener("DOMContentLoaded", () => {

  loadSection(
    "header-container",
    "components/header/header.html",
    "components/header/header.css",
    "components/header/header.js"
  );

  loadSection(
    "hero-container",
    "Pages/home/hero/hero.html",
    "Pages/home/hero/hero.css",
    "Pages/home/hero/hero.js"
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
