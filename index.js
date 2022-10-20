const nextIcon ='<img class="w-100 hover:brightness-0" src="/img/Frame 60.png" alt="right">';
const prevIcon ='<img class="100" src="/img/Frame 61.png" alt="prev">';

     $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    margin:10,
    nav:true,
    navText: [
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})



