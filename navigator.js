async function loadData(name) {
    const response = await fetch(name);
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
}

function updateMain(path, lang, pages, names) {
    let i = names.indexOf(path + "-" + lang);
    const main = document.getElementById("main");
    pages.then(data => main.innerHTML = data[i]);
    updateHeader(lang, pages, names);
}
function updateHeader(lang, pages, names) {
    let i = names.indexOf("header-" + lang);
    const header = document.getElementById("header");
    pages.then(data => header.innerHTML = data[i]);
}

function updateLang(newLang, pages, names) {
    let splitLoc = window.location.href.split("#");
    let path = "home";
    if (splitLoc.length > 1) {
        path = splitLoc[1].split("-")[0];
    }
    lang = newLang;
    window.location = "/#" + path + "-" + lang;
    updateMain(path, lang, pages, names);
}

var names = loadData("names.json");
var pages = loadData("pages.json");
let splitLoc = window.location.href.split("#");
var url = splitLoc[0];
let loc = "home";
var lang = "de";
if (splitLoc.length > 1 && names.includes(splitLoc[1])) {
    loc = splitLoc[1];
    splitSplitLoc = loc.split("-");
    if (splitSplitLoc.length > 1) {
        loc = splitSplitLoc[0];
        lang = splitSplitLoc[1];
    }
} else {
    window.location = "/#home-de";
}
document.addEventListener('DOMContentLoaded', function() {
    updateHeader(lang, pages, names)
    updateMain(loc, lang, pages, names);
}, false);
