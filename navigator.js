function loadPages(names) {
    let pages = {};
    for (let i = 0; i < names.length; i++) {
        fetch(names[i] + ".html")
            .then(response => response.text())
            .then(data => pages[names[i]] = data);
    }
    return pages;
}

function updateMain(path, pages) {
    const main = document.getElementById("main");
    main.innerHTML = pages[path];
}

pages = loadPages(["home"]);
updateMain("home");

