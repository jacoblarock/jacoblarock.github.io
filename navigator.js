async function loadPages(names) {
    let pages = [];
    for (let i = 0; i < names.length; i++) {
        await fetch(names[i] + ".html")
            .then(response => response.text())
            .then(data => pages.push(data));
    }
    return pages;
}

function updateMain(path, pages, names) {
    let i = names.indexOf(path);
    const main = document.getElementById("main");
    pages.then(data => main.innerHTML = data[i]);
}

let names = ["home", "projects"];
let pages = loadPages(names);
document.addEventListener('DOMContentLoaded', function() {
    updateMain("home", pages, names);
}, false);
