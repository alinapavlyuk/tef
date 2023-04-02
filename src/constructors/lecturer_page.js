import {lecturers} from "../data/lecturers_data.js";

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const lecturerID = urlParams.get('number');
const lecturerInfo = lecturers.find((lecturer) => lecturer.id === parseInt(lecturerID));

function showLecturerInfoByID() {
    let sideInfo = document.querySelector("#lecturer-side");
    let mainInfo = document.querySelector("#lecturer-main");
    document.title = `${lecturerInfo.name} - КПІ ТАЕ`;
    sideInfo.innerHTML += `
        <div class="lecturer-image mb-4 mb-sm-0">
            <img src="${lecturerInfo.image}" class="w-100" alt="">
        </div>
        <div class="row mt-3 order-1 lecturer-under-image-info">
            <div class="col-auto d-flex flex-column justify-content-around">
                <span class="d-block green-text">${lecturerInfo.mobileNumber}</span>
                <span class="d-block green-text">${lecturerInfo.email}</span>
            </div>
            <div class="col">
                <button class="green-button w-100">
                    <span>
                        Додаткова інформація
                    </span>
                </button>
            </div>
        </div>
    `
    mainInfo.innerHTML += `
        <h2 class="mb-4">${lecturerInfo.name}</h2>
        <h3 class="mb-4">${lecturerInfo.position}</h3>
        <h3 class="mb-4">${lecturerInfo.subjects}</h3>
        <p>${lecturerInfo.bio}</p>
    `
}

showLecturerInfoByID();