$('#slider-btn-right').click(function () {
    $('#slider-row-first .slider-image:last-child').prependTo('#slider-row-first')
    $('#slider-row-second .slider-image:last-child').prependTo('#slider-row-second')
});

$('#slider-btn-left').click(function () {
    $('#slider-row-first .slider-image:first-child').appendTo('#slider-row-first')
    $('#slider-row-second .slider-image:first-child').appendTo('#slider-row-second')
});