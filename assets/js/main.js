/* Navigation */

function toggleNavigation() {
    document.body.classList.toggle('nav-hidden');
}

/* Onload */

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector("nav a[href='" + location.pathname + "']").classList.add("current");
})
