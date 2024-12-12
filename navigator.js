function updateMain(path) {
    const main = document.getElementById("main");
    let home = "";
    fetch("home.html")
        .then(response => response.text())
        .then(data => home = data);
    main.innerHTML = home;
}

updateMain("index.html");
