let path = window.location.pathname;
let page = path.split("/").pop();
let isMain = page === 'index.html';

export function setLinksNavigation(link) {
    console.log("bebra");
    if(isMain) {
        console.log(1);
        console.log(`html/${link}`);
        return `html/${link}`;
    } else {
        return link;
    }
}

export const navigationListItems =
    [
        {
            name: "Про кафедру",
            link: "about.html",
            dropdown: [
                {name: "Історія", link: "history.html"},
                {name: "Положення", link: "state.html"},
                {name: "Матеріали акредитації", link: "accreditation.html"},
                {name: "Викладачі", link: "lecturers.html"},
                {name: "Партнери",link: "partners.html"},
                {name: "Міжнародна співпраця", link: "international_coop.html"},
                {name: "Випускники", link: "alumni.html"},
                {name: "Документообіг",link: "document_circulation.html"},
                {name: "Дистанційні засоби навчання", link: "offline_studying.html"}
            ]
        },
        {
            name: "Вступ",
            link: "admission.html",
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