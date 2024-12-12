function updateMain(path) {
    const main = document.getElementById("main");
    main.innerHTML = "<h1>Hello world!</h1>";
    let home = "";
    fetch("home.html")
        .then(response => response.text())
        .then(data => home = data);
}

updateMain("index.html");
