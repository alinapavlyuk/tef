import {lecturersBio} from "./lecturers_bio.js";

const LECTURER_FILE_LINK = '../html/lecturer.html?number=';
export const getLink = (id) => `${LECTURER_FILE_LINK}${id}`;

export const lecturers =
    [
        {
            id: 1,
            image: "../images/lecturers/lecturer-1.png",
            name: "АВРАМЕНКО Антоніна Антонівна",
            position: "Старший викладач",
            subjects: [
                "Дисципліни, які викладає",
                "Дисципліни, які викладає"
            ],
            bio: lecturersBio.lecturer1,
            email: "lecturer1@gmail.com",
            mobileNumber: "+38 (000) 000 00 00"
        },
        {
            id: 2,
            image: "../images/lecturers/lecturer-2.png",
            name: "АВРАМЕНКО Антоніна Антонівна",
            position: "Старший викладач",
            subjects: [
                "Дисципліни, які викладає",
                "Дисципліни, які викладає",
                "Дисципліни, які викладає"
            ],
            bio: lecturersBio.lecturer2,
            email: "lecturer2@gmail.com",
            mobileNumber: "+38 (000) 000 00 00"
        },
        {
            id: 3,
            image: "../images/lecturers/lecturer-3.png",
            name: "АВРАМЕНКО Антоніна Антонівна",
            position: "Старший викладач",
            subjects: [
                "Дисципліни, які викладає",
                "Дисципліни, які викладає"
            ],
            bio: lecturersBio.lecturer3,
            email: "lecturer3@gmail.com",
            mobileNumber: "+38 (000) 000 00 00"
        },
        {
            id: 4,
            image: "../images/lecturers/lecturer-1.png",
            name: "АВРАМЕНКО Антоніна Антонівна",
            position: "Старший викладач",
            subjects: [
                "Дисципліни, які викладає",
                "Дисципліни, які викладає"
            ],
            bio: lecturersBio.lecturer1,
            email: "lecturer1@gmail.com",
            mobileNumber: "+38 (000) 000 00 00"
        },
        {
            id: 5,
            image: "../images/lecturers/lecturer-2.png",
            name: "АВРАМЕНКО Антоніна Антонівна",
            position: "Старший викладач",
            subjects: [
                "Дисципліни, які викладає",
                "Дисципліни, які викладає"
            ],
            bio: lecturersBio.lecturer2,
            email: "lecturer2@gmail.com",
            mobileNumber: "+38 (000) 000 00 00"
        },
        {
            id: 6,
            image: "../images/lecturers/lecturer-3.png",
            name: "АВРАМЕНКО Антоніна Антонівна",
            position: "Старший викладач",
            subjects: [
                "Дисципліни, які викладає",
                "Дисципліни, які викладає"
            ],
            bio: lecturersBio.lecturer3,
            email: "lecturer3@gmail.com",
            mobileNumber: "+38 (000) 000 00 00"
        },
    ]