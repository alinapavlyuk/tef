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
                {name: "Дистанційні засоби навчання", link: "online_studying.html"}
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
                {name: "Магістр", link: "master.html"},
                {name: "Доктор філософії", link: "postgraduate.html"},
                {name: "Працевлаштування", link: "#"},
                {name: "Дистанційні ресурси для наукової роботи", link: "online_studying_resources.html"},
                {name: "Студрада", link: "student_council.html"},
                {name: "Гуртожитки", link: "dormitory.html"},
                {name: "Дозвілля", link: "leisure.html"}
            ]
        },
        {
            name: "Наука",
            link: "science.html",
            dropdown: [
                {name: "Наукова робота зі студентами", link: "#"},
                {name: "Напрямки досліджень", link: "#"},
                {name: "Наукові школи", link: "science_schools.html"},
                {name: "Наукові заходи", link: "#"}]
        },
        {
            name: "Новини",
            link: "#",
            dropdown: []
        },
        {
            name: "Контакти",
            link: "contacts.html",
            dropdown: []
        }
    ];