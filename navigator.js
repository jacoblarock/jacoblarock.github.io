async function loadData(name) {
    var out = null;
    const response = await fetch(name);
    const json = await response.json()
        .then(data => out = data);
    console.log(json);
    return out;
}

function updateMain(path, lang, pages, names) {
    let i = names.indexOf(path + "-" + lang);
    const main = document.getElementById("main");
    main.innerHTML = pages[i];
    updateHeader(lang, pages, names);
}
function updateHeader(lang, pages, names) {
    let i = names.indexOf("header-" + lang);
    console.log(i);
    const header = document.getElementById("header");
    header.innerHTML = pages[i];
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

async function loadFunc() {
    names = await loadData("names.json");
    console.log(names);
    pages = await loadData("pages.json");
    let splitLoc = window.location.href.split("#");
    url = splitLoc[0];
    loc = "home";
    lang = "de";
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
    updateHeader(lang, pages, names);
    updateMain(loc, lang, pages, names);
}

var names;
var pages;
var url;
var loc;
var lang;

document.addEventListener('DOMContentLoaded', function() {
    loadFunc();
}, false);
