jQuery(document).ready(function($) {

    // $(document).on('click', '.btn-add-cart', function(e) {
    //     $this = $(this);
    //     var form = $('').serialize();
    //     var loading = $this;
    //     $.ajax({
    //         url: mona_ajax_url.ajaxURL,
    //         type: 'post',
    //         data: {
    //             action: 'mona_ajax_add_to_cart',
    //             form: form,
    //         },
    //         error: function(request) {
    //             loading.removeClass('loading');
    //         },
    //         beforeSend: function(response) {
    //             loading.addClass('loading');
    //         },
    //         success: function(data) {
    //             loading.removeClass('loading');
    //             let $result = JSON.parse(data);
    //         }
    //     });
    // });

    $(document).on('click', '.page-template-contact-template .send__btn', function(e) {
        $('.page-template-contact-template .message__form form input.wpcf7-form-control.wpcf7-submit.btn_contactform_us').trigger('click');
    });

    $('.footer #nav_menu-2 ul.menu > li.current-menu-item > a').click(function (e) {
        
        e.preventDefault();
        var curLink = $(this);
        var link = curLink.attr('href');
        var id_section = link.split("#");
        var scrollPoint = $('#'+id_section[1]).position().top;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        
    })

    $('.footer #nav_menu-3 ul.menu > li.current-menu-item > a').click(function (e) {
        
        e.preventDefault();
        var curLink = $(this);
        var link = curLink.attr('href');
        var id_section = link.split("#");
        var scrollPoint = $('#'+id_section[1]).position().top;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        
    })

    $('.footer #nav_menu-4 ul.menu > li.current-menu-item > a').click(function (e) {
        
        e.preventDefault();
        var curLink = $(this);
        var link = curLink.attr('href');
        var id_section = link.split("#");
        var scrollPoint = $('#'+id_section[1]).position().top;
        $('#'+id_section[1]).trigger('click');
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        
    })

    $('.footer #nav_menu-5 ul.menu > li.current-menu-item > a').click(function (e) {
        
        e.preventDefault();
        var curLink = $(this);
        var link = curLink.attr('href');
        var id_section = link.split("#");
        var scrollPoint = $('#'+id_section[1]).position().top;
        $('#'+id_section[1]).trigger('click');
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        
    })

    $('.footer #nav_menu-7 ul.menu > li.current-menu-item > a').click(function (e) {
        
        e.preventDefault();
        var curLink = $(this);
        var link = curLink.attr('href');
        var id_section = link.split("#");
        var scrollPoint = $('#'+id_section[1]).position().top + 275;
        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);
        
    })

    

    $('section.manufacturing .projects__tabs > .tabs__item').click(function (e) {
        
        e.preventDefault();
        var title = $(this).data('title');
        $('section.manufacturing .sec-tt h2').text(title);
        
    })

    $('section.projects .projects__tabs > .tabs__item').click(function (e) {
        
        e.preventDefault();
        var title = $(this).data('title');
        $('section.projects .sec-tt h2').text(title);
        
    })


    $(document).ready(function() {
        
        var url_current = window.location.href;
        var id_section = url_current.split("#");
        
        if(id_section[1]){
            var scrollPoint = $('#'+id_section[1]).position().top;
           
            $('body,html').animate({
                scrollTop: scrollPoint
            }, 500);

            setTimeout(function () {
                jQuery('#' + id_section[1]).trigger('click');
            }, 200);
        }
    
    });

});

