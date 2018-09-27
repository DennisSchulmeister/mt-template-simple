import MiniTutorial from "mini-tutorial.js";
import mtTheme from "mini-tutorial.js/themes/white.css";
import mtThemeCommon from "mini-tutorial.js/themes/common.css";
import myStylesheet from "./style.css";

async function fetchChapters(chapters, callback) {
    let response = null;
    let html = "";

    for(let i = 0; i < chapters.length; i++) {
        response = await fetch(chapters[i]);
        html += await response.text();
    }

    if (document.readyState == "complete") {
        callback(html);
    } else {
        window.addEventListener("load", () => callback(html));
    }
}

function startApplication(html) {
    if (html) {
        let main = document.querySelector("main");
        main.innerHTML = html;
    }

    let mt = new MiniTutorial();
    mt.start();
}

fetchChapters([
    // Add HTML files here if you want to split the document.
    // The HTML files should only contain <section>-elements without <html>/<head>/<body>
    //
    // "01-intro.html",
    // "02-chapter2.html",
    // ...
], startApplication);
