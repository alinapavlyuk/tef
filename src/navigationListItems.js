let path = window.location.pathname;
let page = path.split("/").pop();
let isMain = page === 'index.html';

export const navigationListItems =
    [
        {
            name: "Про кафедру",
            link: isMain ? "html/about.html" : "about.html",
            dropdown: [
                {name: "Історія", link: "history.html"},
                {name: "Положення", link: "state.html"},
                {name: "Матеріали акредитації", link: "accreditation.html"},
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