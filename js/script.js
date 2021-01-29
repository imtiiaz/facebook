$(function () {


    // Light Gallery

    lightGallery(document.getElementById('video-gallery'), {
        videojs: true
    });


    //  Stories slider

    $('.stories_slider').slick({
        dots: false,
        arrows: false,
        autoplay: false,
        infinite: true,
        nav: false,
        speed: 1200,
        autoplaySpeed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
    });

});
