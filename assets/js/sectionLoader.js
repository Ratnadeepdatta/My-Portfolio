

// function loadSection(containerId, htmlPath, cssPath, jsPath) {
//   fetch(htmlPath)
//     .then(res => {
//       if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
//       return res.text();
//     })
//     .then(html => {
//       const container = document.getElementById(containerId);
//       if (!container) return;

//       container.innerHTML = html;

//       // ---------- NON-BLOCKING CSS ----------
//       if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
//         const link = document.createElement("link");
//         link.rel = "preload";
//         link.as = "style";
//         link.href = cssPath;
//         link.onload = () => {
//           link.rel = "stylesheet";
//         };
//         document.head.appendChild(link);
//       }

//       // ---------- DEFERRED JS ----------
//       if (jsPath && !document.querySelector(`script[src="${jsPath}"]`)) {
//         const script = document.createElement("script");
//         script.src = jsPath;
//         script.defer = true;
//         document.body.appendChild(script);
//       }
//     })
//     .catch(err => console.error(err.message));
// }



// document.addEventListener("DOMContentLoaded", () => {

//   window.loadSection = function (containerId, htmlPath, cssPath, jsPath) {
//     const container = document.getElementById(containerId);
//     if (!container) {
//       console.warn(`Container not found: ${containerId}`);
//       return;
//     }

//     fetch(htmlPath)
//       .then(res => {
//         if (!res.ok) throw new Error(`Failed to load ${htmlPath}`);
//         return res.text();
//       })
//       .then(html => {
//         container.innerHTML = html;

//         // ---------- CSS ----------
//         if (cssPath && !document.querySelector(`link[href="${cssPath}"]`)) {
//           const link = document.createElement("link");
//           link.rel = "stylesheet";
//           link.href = cssPath;
//           document.head.appendChild(link);
//         }

//         // ---------- JS ----------
//         if (jsPath && !document.querySelector(`script[src="${jsPath}"]`)) {
//           const script = document.createElement("script");
//           script.src = jsPath;
//           script.defer = true;
//           document.body.appendChild(script);
//         }
//       })
//       .catch(err => console.error(err.message));
//   };

// });


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
