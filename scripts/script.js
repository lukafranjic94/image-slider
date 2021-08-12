$('#slider-btn-right').click(function () {
    const lastChildFirst = $('#slider-row-first .slider-image:last-child');
    const lastChildSecond = $('#slider-row-second .slider-image:last-child');
    const firstRow = $('#slider-row-first .slider-image');
    const secondRow = $('#slider-row-second .slider-image');
    let firstRowCounter = 0;
    let secondRowCounter = 0;
    firstRow.animate({ left: lastChildFirst.width() + 10 }, {
        complete: function () {
            firstRowCounter++;
            if (firstRowCounter === firstRow.length) {
                $('#slider-row-first .slider-image:last-child').prependTo('#slider-row-first')
                firstRow.each(function () {
                    $(this).removeAttr('style');
                })
            }
        }
    });
    secondRow.animate({ left: lastChildSecond.width() + 10 }, {
        complete: function () {
            secondRowCounter++;
            if (secondRowCounter === secondRow.length) {
                $('#slider-row-second .slider-image:last-child').prependTo('#slider-row-second')
                secondRow.each(function () {
                    $(this).removeAttr('style');
                })
            }
        }
    })
});

$('#slider-btn-left').click(function () {
    const firstChildFirst = $('#slider-row-first .slider-image:first-child');
    const firstChildSecond = $('#slider-row-second .slider-image:first-child');
    const firstRow = $('#slider-row-first .slider-image');
    const secondRow = $('#slider-row-second .slider-image');
    let firstRowCounter = 0;
    let secondRowCounter = 0;
    firstRow.animate({ right: firstChildFirst.width() + 10 }, {
        complete: function () {
            firstRowCounter++;
            if (firstRowCounter === firstRow.length) {
                $('#slider-row-first .slider-image:first-child').appendTo('#slider-row-first')
                firstRow.each(function () {
                    $(this).removeAttr('style');
                })
            }
        }
    });
    secondRow.animate({ right: firstChildSecond.width() + 10 }, {
        complete: function () {
            secondRowCounter++;
            if (secondRowCounter === secondRow.length) {
                $('#slider-row-second .slider-image:first-child').appendTo('#slider-row-second')
                secondRow.each(function () {
                    $(this).removeAttr('style');
                })
            }
        }
    })
});