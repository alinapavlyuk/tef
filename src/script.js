import {navigationListItems, setLinksNavigation} from "./data/navigationListItems.js";

function showMainNavigationBar() {
    let navigationList = document.querySelector("#main-navigation-list");
    navigationListItems.forEach(function (item, index) {
        navigationList.innerHTML += `
        <li id="main-nav-item-${index}">
           <a href = "${setLinksNavigation(item.link)}" id="main-link-${index}">${item.name}</a>
           <div class="space-before-dropdown"></div>
        </li>
        `
        if(item.dropdown.length !== 0) {
            let navigationListItem = document.querySelector(`#main-nav-item-${index}`);
            navigationListItem.classList.add("dropdown");
            navigationListItem.innerHTML += `
                <div class="container">
                    <div class="dropdown-content" id="main-dropdown-${index}"></div>
                </div>
            `
            let dropdownMenu = document.querySelector(`#main-dropdown-${index}`);
            item.dropdown.forEach(function (dropdownItem) {
                dropdownMenu.innerHTML += `
                <a href = "${setLinksNavigation(dropdownItem.link)}">${dropdownItem.name}</a>
                `
            })
        }
    })
}

function showSideNavigationBar() {
    let navigationList = document.querySelector("#offcanvas-navigation-list");
    navigationListItems.forEach(function (item, index) {
        navigationList.innerHTML += `
        <li class="nav-item" id="side-nav-item-${index}">
           <a href="#" class="nav-link" id="side-link-${index}">${item.name}</a>
        </li>
        `
        if(item.dropdown.length !== 0) {
            let navigationLink = document.querySelector(`#side-link-${index}`);
                navigationLink.classList.add("dropdown-toggle");
                navigationLink.setAttribute("data-bs-toggle", "dropdown")
            let navigationListItem = document.querySelector(`#side-nav-item-${index}`);
                navigationListItem.classList.add("dropdown");
                navigationListItem.innerHTML += `
                    <ul class="dropdown-menu" id="side-dropdown-${index}"></ul>
                `
            let dropdownMenu = document.querySelector(`#side-dropdown-${index}`);
                dropdownMenu.innerHTML += `
                    <li><a class="dropdown-item" href="${setLinksNavigation(item.link)}">${item.name}</a></li>
                `
                item.dropdown.forEach(function (dropdownItem) {
                dropdownMenu.innerHTML += `
                    <li><a class="dropdown-item" href="${setLinksNavigation(dropdownItem.link)}">${dropdownItem.name}</a></li>
                `
            })
        }
    })
}

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

showMainNavigationBar();
showSideNavigationBar();



