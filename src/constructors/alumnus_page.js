import {alumni} from "../data/alumni_data.js";

const queryString2 = window.location.search;
const urlParams = new URLSearchParams(queryString2);
const alumnusID = urlParams.get('number');
const alumnusInfo = alumni.find((alumnus) => alumnus.id === parseInt(alumnusID));

function showAlumnusInfoByID() {
    let sideInfo = document.querySelector("#alumnus-side");
    let mainInfo = document.querySelector("#alumnus-main");
    document.title = `${alumnusInfo.name} - КПІ ТАЕ`;
    sideInfo.innerHTML += `
        <div class="alumnus-image mb-4 mb-sm-0">
            <img src="${alumnusInfo.image}" class="w-100" alt="">
        </div>
    `
    mainInfo.innerHTML += `
        <h2 class="mb-4">${alumnusInfo.name}</h2>
        <h3 class="mb-4">${alumnusInfo.years} рр. навчання</h3>
        <h3 class="mb-4">Досягнення</h3>
        <p>${alumnusInfo.bio}</p>
    `

}

console.log(alumnusInfo);
showAlumnusInfoByID();