
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    dot: true,
    nav: true,

    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});


$('.move').owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    // dot: true,

    responsive: {
        0:{
            items: 1,
            nav: false,
        },
        400:{
            items: 2,
            nav: false,
        },
        600:{
            items: 3,
            nav: false
        },
        1000:{
            items: 5,
            nav: false,
            loop: false,
            autoplay:false
        }
    }
});


AOS.init();


