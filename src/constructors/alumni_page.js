import {getLink, alumni} from "../data/alumni_data.js";

function showAlumni() {
    let alumniSection = document.querySelector("#alumni");
    alumni.forEach((alumnus, index) => {
            alumniSection.innerHTML += `
            <div class="col-12 col-sm-4 mb-5" id="alumnus-${index}">
                <div class="image-hover-zoom">
                    <a href="${getLink(alumnus.id)}">
                        <figure class="w-100 h-100 overflow-hidden">
                            <img src="${alumnus.image}" class="w-100" alt="">
                        </figure>
                    </a>
                </div>
                <a href="${getLink(alumnus.id)}" class="link-hover-underline">
                    <div class="row justify-content-between">
                        <div class="col-auto">
                            <h3 class="mb-3">${alumnus.name}</h3>
                        </div>
                        <div class="col-auto">
                            <span>${alumnus.years}</span>
                        </div>
                    </div>
                    <span class="mb-3 d-block">${alumnus.achievements}</span>
                </a>
            </div>
         `
        }
    )
}

showAlumni();