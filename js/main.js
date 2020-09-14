$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    navText: ["<img src=\"img/nav-prev.svg\" alt=\"img\">", "<img src=\"img/nav-next.svg\" alt=\"img\">"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})