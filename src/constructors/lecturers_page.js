import {getLink, lecturers} from "../data/lecturers_data.js";

function showLectures() {
    let lecturersSection = document.querySelector("#lecturers");
    lecturers.forEach((lecturer, index) => {
            lecturersSection.innerHTML += `
            <div class="col-12 col-sm-4 mb-5" id="lecturer-${index}">
                <div class="image-hover-zoom">
                    <a href="${getLink(lecturer.id)}">
                        <figure class="w-100 h-100 overflow-hidden">
                            <img src="${lecturer.image}" class="w-100" alt="">
                        </figure>
                    </a>
                </div>
                <a href="${getLink(lecturer.id)}" class="link-hover-underline">
                    <h3 class="mb-3">${lecturer.name}</h3>
                    <span class="mb-3 d-block">${lecturer.position}</span>
                </a>
            </div>
         `
            let lecturerSection = document.querySelector(`#lecturer-${index} > a`);
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