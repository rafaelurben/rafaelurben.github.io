/* Navigation */

function toggleNavigation() {
    document.body.classList.toggle('nav-hidden');
}

/* Onload */

window.addEventListener('load', () => {
    document.querySelector("nav a[href*='" + location.pathname + "']").classList.add("current");
})
