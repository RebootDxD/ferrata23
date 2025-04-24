$(document).ready(function () {
    $('.temp_water_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        speed: 1000,
        draggable: false,
        accessibility: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });
    $('.advantages_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        accessibility: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });

});

$(document).ready(function () {
    $('.advantages_slider').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        accessibility: false,
        draggable: false,
        pauseOnFocus: false,
        pauseOnHover: false,
        pauseOnDotsHover: false,
    });

});

$(document).ready(function () {
    let backToTop = document.getElementById('back-to-top');

    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            backToTop.style.bottom = "32px";
        } else {
            backToTop.style.bottom = "-80px";
        }
    }

    backToTop.addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({top: 0, behavior: 'smooth'});
    });

})


