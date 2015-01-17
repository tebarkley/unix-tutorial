$(document).ready(function () {


    $('.sidebar').affix({
                            offset: {
                                top: $('header').height()
                            }
                        });

    // jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-fixed-top").addClass("top-nav-collapse");
        } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
        }
    });


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function () {
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                                               scrollTop: $($anchor.attr('href')).offset().top
                                           }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    $("div").mouseenter(function () {
        var id = $(this).attr('id');
        $('a').removeClass('active');
        $("[href=#" + id + "]").addClass('active');
    });

    $('body').scrollspy({ target: '.sidebar' })


})