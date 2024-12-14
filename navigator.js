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

let names = ["home", "projects", "resume", "contact"];
let pages = loadPages(names);
let split_loc = window.location.href.split("#");
console.log(split_loc)
let url = split_loc[0];
let loc = "home";
if (split_loc.length > 1)
    loc = split_loc[1];
console.log(loc);
document.addEventListener('DOMContentLoaded', function() {
    updateMain(loc, pages, names);
}, false);
