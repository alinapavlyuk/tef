import {getLink, alumni} from "../data/alumni_data.js";

function showAlumni() {
    let alumniSection = document.querySelector("#alumni");
    alumni.forEach((alumnus, index) => {
            alumniSection.innerHTML += `
            <div class="col-12 col-sm-4 mb-5" id="alumnus-${index}">
                <img src="${alumnus.image}" class="w-100 mb-3" alt="">
                <div class="row justify-content-between">
                    <div class="col-auto">
                        <a href="${getLink(alumnus.id)}">
                            <h3 class="mb-3">${alumnus.name}</h3>
                        </a>
                    </div>
                    <div class="col-auto">
                        <span>${alumnus.years}</span>
                    </div>
                </div>
                <span class="mb-3 d-block">${alumnus.achievements}</span>
            </div>
         `
        }
    )
}

showAlumni();