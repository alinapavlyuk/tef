import {navigationListItems} from "./navigationListItems.js";

function showMainNavigationBar() {
    let navigationList = document.querySelector("#main-navigation-list");
    navigationListItems.forEach(function (item, index) {
        navigationList.innerHTML += `
        <li id="main-nav-item-${index}">
           <a href = ${item.link} id="main-link-${index}">${item.name}</a>
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
                <a href = ${dropdownItem.link}>${dropdownItem.name}</a>
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
           <a href=${item.link} class="nav-link" id="side-link-${index}">${item.name}</a>
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
                item.dropdown.forEach(function (dropdownItem) {
                dropdownMenu.innerHTML += `
                    <li><a class="dropdown-item" href="${dropdownItem.link}">${dropdownItem.name}</a></li>
                `
            })
        }
    })
}

function playAccordion() {
    let currentItemNum = 1;
    let nextItemNum = 2;

    setInterval(function () {
        var activeItem = document.querySelector(`#accordion-item-${currentItemNum}`);
        activeItem.classList.remove("accordion-item-active");
        var nextItem = document.querySelector(`#accordion-item-${nextItemNum}`);
        nextItem.classList.add("accordion-item-active");
        currentItemNum = currentItemNum % 4 + 1;
        nextItemNum = nextItemNum % 4 + 1;
    }, 5000);
}

let splide = new Splide( '#card-carousel', {
    perPage    : 3,
    gap: 20,
    pagination: false,
    breakpoints: {
        640: {
            perPage: 2,
        },
    },
} );

let bar = splide.root.querySelector( '.carousel-progress-bar' );
splide.on( 'mounted move', function () {
    let end  = splide.Components.Controller.getEnd() + 1;
    let rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';

} );

showMainNavigationBar();
showSideNavigationBar();
playAccordion();
splide.mount();

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});
