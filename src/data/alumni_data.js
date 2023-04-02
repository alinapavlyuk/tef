import {alumniBio} from "./alumni_bio.js";

const ALUMNUS_FILE_LINK = '../html/alumnus.html?number=';
export const getLink = (id) => `${ALUMNUS_FILE_LINK}${id}`;

export const alumni =
    [
        {
            id: 1,
            image: "../images/alumni/alumni-1.png",
            name: "АВРАМЕНКО Антоніна",
            years: "2011-2018",
            achievements: [
                "Досягнення, ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення."
            ],
            bio: alumniBio.alumni1,
        },
        {
            id: 2,
            image: "../images/alumni/alumni-2.png",
            name: "АВРАМЕНКО Антоніна",
            years: "2011-2018",
            achievements: [
                "Досягнення, ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення."
            ],
            bio: alumniBio.alumni2,
        },
        {
            id: 3,
            image: "../images/alumni/alumni-3.png",
            name: "АВРАМЕНКО Антоніна",
            years: "2011-2018",
            achievements: [
                "Досягнення, ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення."
            ],
            bio: alumniBio.alumni3,
        },
        {
            id: 4,
            image: "../images/alumni/alumni-1.png",
            name: "АВРАМЕНКО Антоніна",
            years: "2011-2018",
            achievements: [
                "Досягнення, ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення."
            ],
            bio: alumniBio.alumni1,
        },
        {
            id: 5,
            image: "../images/alumni/alumni-2.png",
            name: "АВРАМЕНКО Антоніна",
            years: "2011-2018",
            achievements: [
                "Досягнення, ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення."
            ],
            bio: alumniBio.alumni2,
        },
        {
            id: 6,
            image: "../images/alumni/alumni-3.png",
            name: "АВРАМЕНКО Антоніна",
            years: "2011-2018",
            achievements: [
                "Досягнення, ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення, ще досягнення, " +
                "ще досягнення, ще досягнення."
            ],
            bio: alumniBio.alumni3,
        },
    ]