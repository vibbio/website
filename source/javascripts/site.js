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

// TOGGLE FOR SUBSCRIPTION PLANS (MONTH VS YEAR)
let billingPeriodToggleMonth = document.getElementsByClassName('billing-period-toggle').item(0);
let billingPeriodToggleYear = document.getElementsByClassName('billing-period-toggle').item(1);

function toggleBillingPeriodMonth () {
    billingPeriodToggleMonth.classList.add('selected');
    billingPeriodToggleYear.classList.remove('selected');
}
function toggleBillingPeriodYear () {
    billingPeriodToggleYear.classList.add('selected');
    billingPeriodToggleMonth.classList.remove('selected');
}

billingPeriodToggleMonth.onclick = function() {
    toggleBillingPeriodMonth();
}
billingPeriodToggleYear.onclick = function() {
    toggleBillingPeriodYear();
}

// SETTING VALUES ON CSS VARIABLES FOR THE LOADER ANIMATION
// function setAnimationProperties() {
//     let path = document.getElementById('symbol-outline').querySelector('path');
//     let pathLength = path.getTotalLength();
//     let duration = (Math.ceil(pathLength) / 1000 * 5).toString() + 's';

//     path.style.setProperty('--path-length', pathLength);
//     path.style.setProperty('--duration', duration);
// }
// setAnimationProperties();