function applyFilters() {
    let category = document.querySelector("#filter-category").value;
    let status_project = document.querySelector("#filter-status-project").value;
    let status_dev = document.querySelector("#filter-status-dev").value;

    let container = document.querySelector("#project-grid");

    // Apply filters

    let filter = "";
    if (category !== "all") {
        filter += `[data-categories~="${category}"]`;
    } else {
        filter += "[data-categories]";
    }
    if (status_project !== "all") {
        filter += `[data-status-project="${status_project}"]`;
    } else {
        filter += "[data-status-project]";
    }
    if (status_dev !== "all") {
        filter += `[data-status-dev="${status_dev}"]`;
    } else {
        filter += "[data-status-dev]";
    }

    container.querySelectorAll(`.project${filter}`).forEach(elem => {
        elem.classList.remove("hidden");
    });
    container.querySelectorAll(`.project:not(${filter})`).forEach(elem => {
        elem.classList.add("hidden");
    });

    // Apply search

    let term = document.querySelector("#filter-search").value.toLowerCase();

    container.querySelectorAll(`.project:not(.hidden)`).forEach(elem => {
        if (!elem.textContent.toLowerCase().includes(term)) {
            elem.classList.add("hidden");
        }
    });

    // Update counts

    let totalCount = container.querySelectorAll(".project").length;
    let visibleCount = container.querySelectorAll(".project:not(.hidden)").length;

    document.querySelector("#project-count").textContent =
        `${visibleCount}/${totalCount} Projekten ${visibleCount === 1 ? "wird" : "werden"} angezeigt:`
}

document.addEventListener('DOMContentLoaded', () => {
    applyFilters();
})
