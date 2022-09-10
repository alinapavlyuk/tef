function showNavigationBar() {
    let navigationListItems =
        ["Про кафедру", "Вступ", "Студенту", "Наука", "Новини", "Контакти"];
    let navigationList = document.querySelector("#navigation-list");
    navigationListItems.forEach(function (item) {
        navigationList.innerHTML = navigationList.innerHTML + `
        <li class="navigation-list-item">
           <a href="" class="navigation-link">${item}</a>
        </li>
        `
    })
}

showNavigationBar();