async function loadPages(names) {
    let pages = [];
    for (let i = 0; i < names.length; i++) {
        await fetch(names[i] + ".html")
            .then(response => response.text())
            .then(data => pages.push(data));
    }
    return pages;
}

function updateMain(path, lang, pages, names) {
    console.log(lang);
    let i = names.indexOf(path + "-" + lang);
    const main = document.getElementById("main");
    pages.then(data => main.innerHTML = data[i]);
}

function updateHeader(lang, pages, names) {
    let i = names.indexOf("header-" + lang);
    const header = document.getElementById("header");
    pages.then(data => header.innerHTML = data[i]);
}

function updateLang(path, newLang, pages, names) {
    lang = newLang;
    updateMain(path, lang, pages, names);
    updateHeader(lang, pages, names);
}

let names = ["home-de", "home-en", "projects-de", "projects-en", "resume-de", "resume-en", "contact-de", "contact-en", "header-de", "header-en"];
let pages = loadPages(names);
let splitLoc = window.location.href.split("#");
console.log(splitLoc);
let url = splitLoc[0];
let loc = "home";
let lang = "en";
if (splitLoc.length > 1)
    loc = splitLoc[1];
    splitSplitLoc = loc.split("-");
    if (splitSplitLoc.length > 1) {
        loc = splitSplitLoc[0];
        lang = splitSplitLoc[1];
    }
document.addEventListener('DOMContentLoaded', function() {
    updateHeader(lang, pages, names)
    updateMain(loc, lang, pages, names);
}, false);
