let timer;
let currentItemNum = 1;
let nextItemNum = 2;

function playAccordion() {
    timer = setInterval(function () {
        let activeItem = document.querySelector(`#accordion-item-${currentItemNum}`);
        activeItem.classList.remove("accordion-item-active");
        let nextItem = document.querySelector(`#accordion-item-${nextItemNum}`);
        nextItem.classList.add("accordion-item-active");
        currentItemNum = currentItemNum % 4 + 1;
        nextItemNum = nextItemNum % 4 + 1;
    }, 4000);
}

function setNewSlide(n) {
    clearInterval(timer);
    let activeItem = document.querySelector(`#accordion-item-${currentItemNum}`);
    activeItem.classList.remove("accordion-item-active");
    currentItemNum = n;
    nextItemNum = n % 4 + 1;
    let newActiveItem = document.querySelector(`#accordion-item-${currentItemNum}`);
    newActiveItem.classList.add("accordion-item-active");
    playAccordion(n);
}

function handleClick() {
    document.querySelectorAll(".photo-accordion-item").forEach((item)=>{
        let number = item.id.charAt(item.id.length - 1);
        console.log(number);
        item.addEventListener("click", () => {
            setNewSlide(number);
        });
    })
}

playAccordion();
handleClick();