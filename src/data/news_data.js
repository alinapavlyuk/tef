import {newsContent} from "./news_content_data.js";

const NEWS_ARTICLE_FILE_LINK = '../html/news_article.html?number=';
export const getLink = (id) => `${NEWS_ARTICLE_FILE_LINK}${id}`;

export const firstArticleData = {
    id: 'b320llk',
    heading: 'Студенство КПІ долучи&shy;лося до благодійної акції “Бакалавр 4.5.0”',
    date: '25.06.22',
    photo: '../images/news/news-b320llk.png',
    preview_text: `Congue id euismod aliquet in nisi ante lorem at. Sit congue sit id vestibulum purus turpis ridiculus.
         Ut a, vitae molestie vestibulum sit. Felis amet egestas suscipit cursus aliquet sit facilisis. Pellentesque elit 
         pretium Congue id euismod aliquet in nisi ante lorem at. Sit congue sit id vestibulum purus turpis ridiculus. 
         Ut a, vitae...`,
    main_text: newsContent.b320llk
}

export const newsData = [
    {
        id: 'f400kew',
        heading: 'Зміна спеціальності: з ФІВТ на фізмат. Як вчаться на математиків у КПІ? Артем Кравець, 4-й курс ФМФ',
        date: '25.06.22',
        photo: '../images/news/news-f400kew.png',
        preview_text: `Congue id euismod aliquet in nisi ante lorem at. Sit congue sit id vestibulum purus turpis ridiculus.
         Ut a, vitae molestie vestibulum sit. Felis amet egestas suscipit cursus aliquet sit facilisis. Pellentesque elit 
         pretium Congue id euismod aliquet in nisi ante lorem at. Sit congue sit id vestibulum purus turpis ridiculus. 
         Ut a, vitae...`,
        main_text: newsContent.f400kew
    },
    {
        id: 'g63792q',
        heading: 'Vulputate morbi non, dui vehicula convallis fringilla a. Non gravida malesuada nisl pellentesque volutpat' +
            ' quis scelerisque. Odio amet ut elementum urna, molestie egestas nullam nisl, velit.',
        date: '25.06.22',
        photo: '../images/news/news-g63792q.png',
        preview_text: `Congue id euismod aliquet in nisi ante lorem at. Sit congue sit id vestibulum purus turpis ridiculus.
         Ut a, vitae molestie vestibulum sit. Felis amet egestas suscipit cursus aliquet sit facilisis. Pellentesque elit 
         pretium Congue id euismod aliquet in nisi ante lorem at. Sit congue sit id vestibulum purus turpis ridiculus. 
         Ut a, vitae...`,
        main_text: newsContent.f400kew
    }
]
