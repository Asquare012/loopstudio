// side menu(open)
let butt = document.querySelector("#buttin");
let menu = document.querySelector("#side-menu");
menu.style.left = -500;

butt.addEventListener("click", () => {
    menu.style.left = 0;
    document.body.style.overflowY = "hidden";
});

// side menu(close)
let close = document.querySelector("#close");

close.addEventListener("click", () => {
    menu.style.left = -500;
    document.body.style.overflowY = "visible";
});