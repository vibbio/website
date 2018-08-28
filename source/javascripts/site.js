// MENU SCRIPT
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

var canvasWidth = document.getElementById('heroSection').offsetWidth;
var canvasHeight = document.getElementById('heroSection').offsetHeight;

var confettiSettings = {
        target: 'my-canvas',
        max: '80',
        animate: false,
        props: ["circle","square","triangle"],
        colors: [[255,255,255],[63,207,213],[35,55,70],[0,131,155],[0,88,111]],
        clock: '25',
        width: canvasWidth,
        height: canvasHeight
};
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();

// SETTING VALUES ON CSS VARIABLES FOR THE LOADER ANIMATION
// function setAnimationProperties() {
//     let path = document.getElementById('symbol-outline').querySelector('path');
//     let pathLength = path.getTotalLength();
//     let duration = (Math.ceil(pathLength) / 1000 * 5).toString() + 's';

//     path.style.setProperty('--path-length', pathLength);
//     path.style.setProperty('--duration', duration);
// }
// setAnimationProperties();