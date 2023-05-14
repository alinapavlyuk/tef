import {getLink, firstArticleData, newsData} from "../data/news_data.js";

function fillCarousel(n) {
    let newsCarousel = newsData;
    newsCarousel.unshift(firstArticleData);
    newsCarousel = newsCarousel.slice(0, n);
    console.log(newsCarousel);
    let carousel = document.querySelector("#carousel");
    newsCarousel.forEach((article) => {
            carousel.innerHTML += `<li class="splide__slide">
                                        <div class="splide__slide__container">
                                            <a href="${getLink(article.id)}">
                                                <img src="${article.photo}" alt="">
                                            </a>
                                            <div>
                                                <a href="${getLink(article.id)}">
                                                    ${article.heading}
                                                </a>
                                            </div>
                                        </div>
                                    </li>`
    })
    carousel.innerHTML += `<li class="splide__slide">
                                <button class="green-button" onclick="window.location.href='html/news_main.html';">
                                    <span>До інших новин</span>
                                </button>
                            </li>`

}

fillCarousel(4);