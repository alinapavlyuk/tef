import {partners} from "./data/partners_data.js";
function showPartners() {
    let partnersSection = document.querySelector("#partners");
    partners.forEach((partner) => {
        partnersSection.innerHTML += `
            <div class="col-6 col-sm-3 col-lg-2 mb-3 mb-sm-5">
                <img src="${partner.image}" class="w-100 mb-2" alt="">
                <span>${partner.name}</span>
            </div>
        `
    })
}

showPartners();