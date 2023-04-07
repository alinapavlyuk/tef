let path = window.location.pathname;
let page = path.split("/").pop();
let isMain = page === 'index.html';

export function setLinksNavigation(link) {
    if (isMain) {
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
                {name: "Партнери", link: "partners.html"},
                {name: "Міжнародна співпраця", link: "international_coop.html"},
                {name: "Випускники", link: "alumni.html"},
                {name: "Документообіг", link: "document_circulation.html"},
                {name: "Дистанційні засоби навчання", link: "offline_studying.html"}
            ]
        },
        {
            name: "Вступ",
            link: "admission.html",
            dropdown: [
                {name: "Про спеціальність", link: "speciality.html"},
                {name: "На 1 курс(за ЗНО)", link: "admission-zno.html"},
                {name: "Молодший спеціаліст", link: "admission-junior-specialist.html"},
                {name: "Магістратура", link: "admission-master.html"},
                {name: "Аспірантура", link: "admission-postgraduate.html"},
                {name: "Заочна форма навчання", link: "admission-external.html"},
                {name: "Підготовчі курси", link: "admission-preparatory-courses.html"}
            ]
        },
        {
            name: "Студенту",
            link: "student.html",
            dropdown: [
                {name: "Бакалавр", link: "bachelor.html"},
                {name: "Магістр", link: "#"},
                {name: "Доктор філософії", link: "#"},
                {name: "Працевлаштування", link: "#"},
                {name: "Дистанційні ресурси для наукової роботи", link: "#"},
                {name: "Студрада", link: "#"},
                {name: "Гуртожитки", link: "#"},
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