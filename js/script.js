"use strict";

// Functions to run even before DOMReady that required jQuery
(function($) {

    var initial = false;
    var templates = {};

    var render = function(template_key, data) {
            data = data || {};
            if (data.image != undefined) {
                $('#bg').attr('src', 'images/background/' + data.image);
            }
            $('#main').hide(500, function(){
                $(".block").show();
                $('#main').html(templates[template_key]).show(0, function() {
                    load_colorbox();
                    load_css();
                });
                $(".block").hide(0);
                if (initial) {
                    initial = false;
                    $(".block").css({
                        'height': '86%'
                    });
                }
            });
        };

    var load_colorbox = function() {
            $(".group1").colorbox({
                rel: 'group1',
                transition: "none",
                "current": ''
            });
            $(".group2").colorbox({
                rel: 'group2',
                transition: "none",
                "current": ''
            });
            $(".group3").colorbox({
                rel: 'group3',
                transition: "none",
                "current": ''
            });
            $(".group4").colorbox({
                rel: 'group4',
                transition: "none",
                "current": ''
            });
            $(".group5").colorbox({
                rel: 'group5',
                transition: "none",
                "current": ''
            });
        };

    $("script[type='text/x-mustache-template']").each(

    function(index, element) {
        templates[$(this).data('id')] = $(this).html();
        $(this).remove();
    });

    // Bind the event.
    $(window).hashchange(function() {
        // Alerts every time the hash changes!
        var hash = location.hash;
        $('#footer ul li').removeClass('active');

        switch (hash) {
        case '#!/main':
            render('main', {
                'image': '01.jpg'
            });
            break;
        case '#!/contact':
            render('contact', {
                'image': '02.jpg'
            });
            break;
        case '#!/facebook':
            render('facebook', {
                'image': '03.jpg'
            });
            break;
        case '#!/about/story':
            render('about/story', {
                'image': '06.jpg'
            });
            break;
        case '#!/about/company':
            render('about/company', {
                'image': '07.jpg'
            });
            break;
        case '#!/about/quality':
            render('about/quality', {
                'image': '08.jpg'
            });
            break;
        case '#!/environment':
            render('environment', {
                'image': '09.jpg'
            });
            break;
        case '#!/environment_1':
            render('environment_1', {
                'image': '10.jpg'
            });
            break;
        case '#!/environment_2':
            render('environment_2', {
                'image': '11.jpg'
            });
            break;
        case '#!/food':
            render('food', {
                'image': '04.jpg'
            });
            break;
        case '#!/food_1':
            render('food_1', {
                'image': '05.jpg'
            });
            break;
        case '#!/room':
            render('room', {
                'image': 'money.jpg'
            });
            break;
        case '#!/room_1':
            render('room_1', {
                'image': 'treasure.jpg'
            });
            break;
        case '#!/room_2':
            render('room_2', {
                'image': 'luck.jpg'
            });
            break;
        case '#!/vendor':
            render('vendor', {
                'image': '12.jpg'
            });
            break;
        case '#!/service':
            render('service', {
                'image': '13.jpg'
            });
            break;
        case '#!/boby_service':
            render('boby_service', {
                'image': '14.jpg'
            });
            break;
        default:
            render('main', {
                'image': '01.jpg'
            });
        }
    })

    /**
     * define css
     */
    var load_css = function() {
            var footer_height = $(document).height() * 16 / 100;
            var footer_top = footer_height * 12.5 / 100;
            var main_link_height = (footer_height - footer_top * 4) / 3;

            var contact_link_height = footer_height * 31.2 / 100;
            var facebook_link_height = footer_height * 43.72 / 100;

            var header_text_height = $(document).height() * 7 / 100;
            var menu_text_height = $(document).height() * 6 / 100;
            var menu_ul_height = $(".menu ul li").height();
            var menu_ul_height_top = (menu_text_height - menu_ul_height) / 2;

            var contact_left_width = $(".contact .left").width();
            var contact_left_height = $(".contact .left").height();
            var contact_left_image_width = '497';
            var contact_left_image_height = '397';
            var contact_left_margin_top = (contact_left_height - contact_left_image_height) / 2;

            if (contact_left_image_width > contact_left_width) {
                contact_left_image_height = contact_left_image_height * (contact_left_width / contact_left_image_width);
                contact_left_image_width = contact_left_width;
                contact_left_margin_top = (contact_left_height - contact_left_image_height) / 2;
                $("#map").css('width', contact_left_image_width + 'px');
                $("#map").css('height', contact_left_image_height + 'px');
            }

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

            // room sub menu
            $(".room .menu").css({
                'height': menu_text_height + 'px'
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

            $(".contact .left img").css({
                'margin-top': contact_left_margin_top + 'px'
            });
        };

    $(".home").click(function() {
        render('main', {
            'image': '01.jpg'
        });
    });
    // Trigger the event (useful on page load).
    $(window).hashchange();
}(jQuery));