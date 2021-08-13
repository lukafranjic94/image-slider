$('#slider-btn-right').click(function () {
    const firstRow = $('#slider-row-first .slider-image');
    const secondRow = $('#slider-row-second .slider-image');
    slideRight(firstRow);
    slideRight(secondRow);
});

$('#slider-btn-left').click(function () {
    const firstRow = $('#slider-row-first .slider-image');
    const secondRow = $('#slider-row-second .slider-image');
    slideLeft(firstRow);
    slideLeft(secondRow);
});

function slideRight(sliderElements) {
    const lastChild = sliderElements.last();
    const slider = lastChild.parent();
    const totalHorizontalMargin = getTotalHorizontalMargin(lastChild);
    let counter = 0;
    sliderElements.animate({ left: lastChild.width() + totalHorizontalMargin }, {
        complete: () => {
            counter++;
            if (counter === sliderElements.length) {
                lastChild.prependTo(slider);
                sliderElements.each(function () {
                    $(this).removeAttr('style');
                })
            }
        }
    })
}

function slideLeft(sliderElements) {
    const firstChild = sliderElements.first();
    const otherChildren = sliderElements.slice(1);
    const slider = firstChild.parent();
    const totalHorizontalMargin = getTotalHorizontalMargin(firstChild);
    let counter = 0;
    let widthSum = 0;
    sliderElements.each(function () {
        widthSum += $(this).width();
    });
    const totalLeft = widthSum + totalHorizontalMargin * sliderElements.length;
    firstChild.css({ left: totalLeft });
    const animateElement = () => {
        counter++;
        if (counter === sliderElements.length) {
            firstChild.appendTo(slider);
            sliderElements.each(function () {
                $(this).removeAttr('style');
            })
        }
    }
    firstChild.animate({ left: totalLeft - firstChild.width() - totalHorizontalMargin }, {
        complete: animateElement
    });
    otherChildren.animate({ right: firstChild.width() + totalHorizontalMargin }, {
        complete: animateElement
    });
}

function getTotalHorizontalMargin(element) {
    return parseInt(element.css('marginRight'), 10) + parseInt(element.css('marginLeft'), 10);
}