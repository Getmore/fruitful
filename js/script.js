
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
    })

    // Trigger the event (useful on page load).
    $(window).hashchange();
    //console.log(templates);
}(jQuery));
