import {countriesCoop} from "../data/countries_coop_data.js";

function showCountriesCoop() {
    let countriesCoopSection = document.querySelector("#countries-coop");
    countriesCoop.forEach((country,index) => {
        countriesCoopSection.innerHTML += `
            <div class="col-6">
                <div class="row mb-3">
                    <div class="col-auto">
                        <img src="${country.image}" class="flag-coop" alt="">
                    </div>
                    <div class="col p-0">
                        <h3 class="m-0">${country.name}</h3>
                    </div>
                </div>
                <div class="row mb-3" id="coop-universities-${index}"></div>
            </div>
        `;
        let universitiesCoopSection = document.querySelector(`#coop-universities-${index}`);
        country.universities.forEach((university) => {
            universitiesCoopSection.innerHTML += `
                <div class="col-12 mb-3">
                    <span>
                        <a href="" class="green-link">
                            ${university.name}
                        </a>
                    </span>
                </div>
            `;
        })
    })
}

showCountriesCoop();