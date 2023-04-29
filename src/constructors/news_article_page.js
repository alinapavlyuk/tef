import {newsData, firstArticleData} from "../data/news_data.js";

newsData.unshift(firstArticleData);
const queryString2 = window.location.search;
const urlParams = new URLSearchParams(queryString2);
const articleID = urlParams.get('number');
const articleInfo = newsData.find((article) => article.id === `${articleID}`);
console.log(articleInfo)

function showArticleByID() {
    let sideInfo = document.querySelector("#article-side");
    let mainInfo = document.querySelector("#article-main");
    document.title = `${articleInfo.heading} - КПІ ТАЕ`;
    sideInfo.innerHTML += `
        <div class="mb-4 mb-sm-0">
            <img src="${articleInfo.photo}" class="w-100 image-4-3 mb-2" alt="">
            <span class="green-text">${articleInfo.date}</span>
        </div>
    `
    mainInfo.innerHTML += `
        <h2 class="mb-4">${articleInfo.heading}</h2>
        <p>${articleInfo.main_text}</p>
    `

}

showArticleByID();