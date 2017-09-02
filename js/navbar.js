$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
    // Cierra navbar al hacer click/touch
});

var setNavbar = function () {
    if (window.pageYOffset > 110) {
        $('#navbar-easy').addClass('smallnav');
        $('#navbar-easy').css('margin-top', '0');
        $('#navbar-easy').removeClass('bignav');
        $('#navbar-easy .navbar-brand img').removeClass('logo-invisible');
        $('#navbar-easy .navbar-brand img').addClass('logo-visible');
    }
}

$(document).ready(function () {
    setNavbar();
    /** Scroll del navbar */
    var target = 110,
        timeout = null;
    $(window).scroll(function (e) {
        if (!timeout) {
            timeout = setTimeout(function () {
                clearTimeout(timeout);
                timeout = null;
                if ($(window).scrollTop() >= target) {
                        $('#navbar-easy').addClass('smallnav');
                        $('#navbar-easy').css('margin-top', '0');
                        $('#navbar-easy').removeClass('bignav');
                        $('#navbar-easy .navbar-brand img').removeClass('logo-invisible');
                        $('#navbar-easy .navbar-brand img').addClass('logo-visible');
                } else {
                    $('#navbar-easy').addClass('bignav');
                    $('#navbar-easy').removeClass('smallnav');
                    $('#navbar-easy').css('margin-top', '2%');
                    $('#navbar-easy .navbar-brand img').addClass('logo-invisible');
                    $('#navbar-easy .navbar-brand img').removeClass('logo-visible');
                }
                // navbar links
                document.getElementsByTagName("body").onscroll = function () { console.log(e) };
            }, 500);
        }
    }); /** ./Scroll del navbar */
});