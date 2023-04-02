function playAccordion() {
    let currentItemNum = 1;
    let nextItemNum = 2;

    setInterval(function () {
        var activeItem = document.querySelector(`#accordion-item-${currentItemNum}`);
        activeItem.classList.remove("accordion-item-active");
        var nextItem = document.querySelector(`#accordion-item-${nextItemNum}`);
        nextItem.classList.add("accordion-item-active");
        currentItemNum = currentItemNum % 4 + 1;
        nextItemNum = nextItemNum % 4 + 1;
    }, 5000);
}

playAccordion();