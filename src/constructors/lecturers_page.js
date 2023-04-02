import {getLink, lecturers} from "../data/lecturers_data.js";

function showLectures() {
    let lecturersSection = document.querySelector("#lecturers");
    lecturers.forEach((lecturer, index) => {
        lecturersSection.innerHTML += `
            <div class="col-12 col-sm-4 mb-5" id="lecturer-${index}">
                <img src="${lecturer.image}" class="w-100 mb-3" alt="">
                <a href="${getLink(lecturer.id)}">
                    <h3 class="mb-3">${lecturer.name}</h3>
                </a>
                <span class="mb-3 d-block">${lecturer.position}</span>
            </div>
         `
        let lecturerSection = document.querySelector(`#lecturer-${index}`);
        lecturer.subjects.forEach((subject) => {
            lecturerSection.innerHTML += `
                <span class="d-block">${subject}</span>
            `
            }
        )
        }
    )
}

showLectures();