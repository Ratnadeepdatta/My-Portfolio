
function loadSection(containerId, htmlPath, cssPath, jsPath) {
    fetch(htmlPath)
        .then(res => res.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;

            // load CSS
            if (cssPath) {
                const style = document.createElement("link");
                style.rel = "stylesheet";
                style.href = cssPath;
                document.head.appendChild(style);
            }

            // load JS
            if (jsPath) {
                const script = document.createElement("script");
                script.src = jsPath;
                document.body.appendChild(script);
            }
        });
}
