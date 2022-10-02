function showNavigationBar() {
    let navigationListItems =
        [
            {
                name: "Про кафедру",
                link: "#",
                dropdown: [
                    {name: "Історія", link: "#"},
                    {name: "Положення", link: "#"},
                    {name: "Матеріали акредитації", link: "#"},
                    {name: "Викладачі", link: "#"},
                    {name: "Партнери",link: "#"},
                    {name: "Міжнародна співпраця", link: "#"},
                    {name: "Випускники", link: "#"},
                    {name: "Документообіг",link: "#"},
                    {name: "Дистанційні засоби навчання", link: "#"}
                ]
            },
            {
                name: "Вступ",
                link: "#",
                dropdown: [
                    {name:"Про спеціальність", link: "#"},
                    {name: "На 1 курс(за ЗНО)", link: "#"},
                    {name: "Молодший спеціаліст", link: "#"},
                    {name: "Магістратура", link: "#"},
                    {name: "Аспірантура", link: "#"},
                    {name: "Заочна форма навчання", link: "#"},
                    {name: "Підготовчі курси", link: "#"}
                ]
            },
            {
                name: "Студенту",
                link: "#",
                dropdown: [
                    {name: "Бакалавр", link: "#"},
                    {name: "Магістр", link: "#"},
                    {name: "Доктор філософії", link: "#"},
                    {name: "Працевлаштування", link: "#"},
                    {name: "Дистанційні ресурси для наукової роботи", link: "#"},
                    {name: "Студрада", link: "#"},
                    {name: "Гуртожитки",link: "#"},
                    {name: "Дозвілля", link: "#"}
                ]
            },
            {
                name: "Наука",
                link: "#",
                dropdown: [
                    {name: "Наукова робота зі студентами", link: "#"},
                    {name: "Напрямки досліджень", link: "#"},
                    {name: "Наукові школи", link: "#"},
                    {name: "Наукові заходи", link: "#"}]
            },
            {
                name: "Новини",
                link: "#",
                dropdown: []
            },
            {
                name: "Контакти",
                link: "#",
                dropdown: []
            }
        ];
    let navigationList = document.querySelector("#navigation-list");
    navigationListItems.forEach(function (item, index) {
        navigationList.innerHTML += `
        <li class="navigation-list-item" id="nav-item-${index}">
           <a href = ${item.link} id="link-${index}">${item.name}</a>
           <div class="space-before-dropdown"></div>
        </li>
        `
        if(item.dropdown.length !== 0) {
            let navigationListItem = document.querySelector(`#nav-item-${index}`);
            navigationListItem.classList.add("dropdown");
            navigationListItem.innerHTML += `
                <div class="dropdown-content" id="dropdown-${index}"></div>
            `
            let dropdownMenu = document.querySelector(`#dropdown-${index}`);
            item.dropdown.forEach(function (dropdownItem) {
                dropdownMenu.innerHTML += `
                <a href = ${dropdownItem.link}>${dropdownItem.name}</a>
                `
            })
        }
    })
}

showNavigationBar();playAccordion();