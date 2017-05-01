(function($) {
    $(function() {
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel__control--prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel__control--next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel__pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('jcarousel__pagination--active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('jcarousel__pagination--active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });
    });
})(jQuery);
