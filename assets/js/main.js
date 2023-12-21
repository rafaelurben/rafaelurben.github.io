/* Navigation */

function toggleNavigation() {
    document.body.classList.toggle('nav-hidden');
}

/* Onload */

window.addEventListener('load', () => {
    document.querySelector("a[href*='" + location.pathname + "']").classList.add("current");
})
