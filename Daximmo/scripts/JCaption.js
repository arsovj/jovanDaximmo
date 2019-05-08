jQuery(window).on('load', function () {
    new JCaption('img.caption');
});
jQuery(function ($) {
    $('.hasTip').each(function () {
        var title = $(this).attr('title');
        if (title) {
            var parts = title.split('::', 2);
            $(this).data('tip:title', parts[0]);
            $(this).data('tip:text', parts[1]);
        }
    });
    var JTooltips = new Tips($('.hasTip').get(), { "maxTitleChars": 50, "fixed": false });
});