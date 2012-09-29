
"use strict";

// Functions to run even before DOMReady that required jQuery
(function($){

    var templates = {};

    var render = function (template_key, data) {
        data = data || {};
        if (data.image != undefined) {
            $('#bg').attr('src', 'images/background/' + data.image);
        }
        $('#main').hide(0, function(){
            $('#main').html(templates[template_key]).show();
        });
    };

    var load_colorbox = function() {
        $(".group1").colorbox({rel:'group1', transition:"none", width:"75%", height:"75%"});
        $(".group2").colorbox({rel:'group2', transition:"none", width:"75%", height:"75%"});
        $(".group3").colorbox({rel:'group3', transition:"none", width:"75%", height:"75%"});
        $(".group4").colorbox({rel:'group4', transition:"none", width:"75%", height:"75%"});
    };

    $("script[type='text/x-mustache-template']").each(
        function (index, element) {
            templates[$(this).data('id')] = $(this).html();
            $(this).remove();
        }
    );

    // Bind the event.
    $(window).hashchange( function(){
        // Alerts every time the hash changes!
        var hash = location.hash;
        $('#footer ul li').removeClass('active');

        switch (hash) {
            case '#!/main':
                render('main', {'image': '01.jpg'});
            break;
            case '#!/contact':
                render('contact', {'image': '10.jpg'});
            break;
            case '#!/facebook':
                render('facebook', {'image': '11.jpg'});
            break;
            case '#!/about/story':
                render('about/story', {'image': '02.jpg'});
                $('#about').addClass('active');
            break;
            case '#!/about/company':
                render('about/company', {'image': '03.jpg'});
                $('#about').addClass('active');
            break;
            case '#!/about/quality':
                render('about/quality', {'image': '04.jpg'});
                $('#about').addClass('active');
            break;
            case '#!/environment':
                render('environment', {'image': '05.jpg'});
                $('#environment').addClass('active');
            break;
            case '#!/environment_1':
                render('environment_1', {'image': '06.jpg'});
                $('#environment').addClass('active');
            break;
            case '#!/environment_2':
                render('environment_2', {'image': '07.jpg'});
                $('#environment').addClass('active');
            break;
            case '#!/food':
                render('food', {'image': '08.jpg'});
                $('#food').addClass('active');
            break;
            case '#!/food_1':
                render('food_1', {'image': '09.jpg'});
                $('#food').addClass('active');
            break;
            case '#!/room':
                render('room', {'image': '12.jpg'});
                $('#room').addClass('active');
            break;
            case '#!/room_1':
                render('room_1', {'image': '13.jpg'});
                $('#room').addClass('active');
            break;
            case '#!/room_2':
                render('room_2', {'image': '14.jpg'});
                $('#room').addClass('active');
            break;
            case '#!/vendor':
                render('vendor', {'image': '15.jpg'});
                $('#room').addClass('active');
            break;
            case '#!/service':
                render('service', {'image': '16.jpg'});
                $('#room').addClass('active');
            break;
            default:
                render('main', {'image': '01.jpg'});
        }

        load_colorbox();
        load_css();
    })

/**
 * define css
 */
var load_css = function () {
    var footer_height = $(document).height() * 16 / 100;
    var footer_top = footer_height * 12.5 / 100;
    var main_link_height = (footer_height - footer_top * 4)/3;

    var contact_link_height = footer_height * 31.2 / 100;
    var facebook_link_height = footer_height * 43.72 / 100;

    var header_text_height = $(document).height() * 7 / 100;
    var menu_text_height = $(document).height() * 6 / 100;
    var menu_ul_height = $(".menu ul li").height();
    var menu_ul_height_top = (menu_text_height - menu_ul_height)/2;

    $(".header_text div").css({
        'height': header_text_height + 'px',
        'line-height': header_text_height + 'px'
    });

    $(".menu .left").css({
        'height': menu_text_height + 'px',
        'line-height': menu_text_height + 'px'
    });
    $(".menu ul").css({
        'padding-top': menu_ul_height_top + 'px'
    });

    $("#footer ul li").css({
        'margin-top': footer_top + 'px'
    });
    $(".main_link ul li").css({
        'height': main_link_height + 'px',
        'line-height': main_link_height + 'px'
    });
    $("#footer .left").css({
        'line-height': footer_height + 'px'
    });
    $(".mail").css({
        'height': contact_link_height + 'px',
        'line-height': contact_link_height + 'px'
    });
    $(".facebook").css({
        'height': facebook_link_height + 'px',
        'line-height': facebook_link_height + 'px'
    });
};

    // Trigger the event (useful on page load).
    $(window).hashchange();
}(jQuery));
