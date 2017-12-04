let overlay = document.getElementsByClassName('overlay').item(0);
let menuToggle = document.getElementsByClassName('menu-trigger').item(0);
let closeButton = document.getElementsByClassName('close-overlay').item(0);

function toggleMenu() {
    overlay.classList.toggle('open');
}

menuToggle.onclick = function() {
    toggleMenu();
}
closeButton.onclick = function() {
    toggleMenu();
}