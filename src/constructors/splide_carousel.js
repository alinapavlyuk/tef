let splide = new Splide('#card-carousel', {
    perPage: 3,
    gap: 20,
    pagination: false,
    breakpoints: {
        640: {
            perPage: 2,
        },
    },
});

let bar = splide.root.querySelector('.carousel-progress-bar');
splide.on('mounted move', function () {
    let end = splide.Components.Controller.getEnd() + 1;
    let rate = Math.min((splide.index + 1) / end, 1);
    bar.style.width = String(100 * rate) + '%';

});

splide.mount();