(function($) {
    //Smooth Scroller
    $.fn.smoothScroll = function() {
        $('nav a').on('click', function() {
            var sectionId = $(this).attr('href');
            var target = $(sectionId);
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1250);
            return false;
        });
    }
} (jQuery) );
