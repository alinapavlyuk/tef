import {firstArticleData, getLink, newsData} from "../data/news_data.js";

function showFirstArticle() {
    let container = document.querySelector("#first-news-article");
    container.innerHTML += `
                    <div class="col-12 col-sm-6 col-lg-8 h-100 image-hover-zoom">
                        <a href="${getLink(firstArticleData.id)}">
                            <figure class="w-100 h-100 overflow-hidden">
                                <img src="${firstArticleData.photo}" class="w-100 h-100" style='object-fit: cover' alt="">
                            </figure>
                        </a>
                    </div>
                    <div class="news-preview-text col-12 col-sm-6 col-lg-4 h-100 overflow-hidden">
                        <a href="${getLink(firstArticleData.id)}" class="link-hover-underline">
                            <div class="d-flex flex-column justify-content-between h-100">
                                <span class="green-text">${firstArticleData.date}</span>
                                <h2 class="d-none d-sm-inline">${firstArticleData.heading}</h2>
                                <h3 class="d-sm-none">${firstArticleData.heading}</h3>
                                <p class="m-0">${firstArticleData.preview_text}</p>
                            </div>
                        </a>
                    </div>
            `
}

function showArticles() {
    let container = document.querySelector("#news-articles");
    newsData.forEach((article) => {
        container.innerHTML += `
            <div class="col-12 col-sm-4 h-100 mb-5">
                <div class="image-hover-zoom">
                    <a href="${getLink(article.id)}">
                        <figure class="w-100 h-100 overflow-hidden">
                            <img src="${article.photo}" class="w-100 h-100" alt="">
                        </figure>
                    </a>
                </div>
                <div class="news-preview-text overflow-hidden">
                    <a href="${getLink(article.id)}" class="link-hover-underline">
                        <span class="green-text">${article.date}</span>
                        <h3>${article.heading}</h3>
                        <p class="m-0">${article.preview_text}</p>
                    </a>
                </div>
            </div>
        `
    })
}

function showNews() {
    showFirstArticle();
    showArticles();
}

showNews();