$('#slider-btn-right').click(function () {
    $('#slider-row-first img:last-child').prependTo('#slider-row-first')
    $('#slider-row-second img:last-child').prependTo('#slider-row-second')
});

$('#slider-btn-left').click(function () {
    $('#slider-row-first img:first-child').appendTo('#slider-row-first')
    $('#slider-row-second img:first-child').appendTo('#slider-row-second')
});