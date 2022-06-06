    $('#button-collapse').click(function () {
        $('#header-menu').slideToggle();
    })
    $('.footer-intro').click(function () {
        $('#footer-intro-content').slideToggle();
    })
    $('.footer-project').click(function () {
        $('#footer-project-content').slideToggle();
    })
    $('.footer-contact').click(function () {
        $('#footer-contact-content').slideToggle();
    })
    $(window).resize(function () {
        if ($(window).width() > 768) {
            $('#footer-intro-content,#footer-project-content,#footer-contact-content').css('display', 'block');
        } else {
            $('#footer-intro-content,#footer-project-content,#footer-contact-content').css('display', 'none');
        }
    })
    $('.slider__search-tabs ul li').click(function () {
        $('.slider__search-tabs ul li').removeClass('active');
        $(this).addClass('active');
    })
    $(document).ready(function () {
        $('#tab-product-content').hide();
        setTimeout(function () {
            $('#tab-product-content').show();
            $('#product-loading-animation').hide();
        }, 1500)
    })
    $('.slider__search-tabs ul li').click(function () {
        $('#tab-product-content').hide();
        $('#product-loading-animation').show();
        setTimeout(function () {
            $('#tab-product-content').show();
            $('#product-loading-animation').hide();
        }, 1500)
    })

// Go Top Button

    $("#arrow").click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    })

    $(window).scroll(function(){
    var _scrollTop = $(window).scrollTop();
    if(_scrollTop == 0){
        $("#arrow").css('visibility','hidden');

    }
    else{
        $("#arrow").css('visibility','visible');
    }
    })
