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

    sliderElements.animate({ left: lastChild.width() + totalHorizontalMargin }).promise().then(() => {
        lastChild.prependTo(slider);
        sliderElements.removeAttr('style');
    });
}

function slideLeft(sliderElements) {
    const firstChild = sliderElements.first();
    const otherChildren = sliderElements.slice(1);
    const slider = firstChild.parent();
    const totalHorizontalMargin = getTotalHorizontalMargin(firstChild);
    const widthSum = sliderElements.map((i, elem) => $(elem).width()).toArray().reduce((accumulator, currentValue) => accumulator + currentValue);
    const totalLeft = widthSum + totalHorizontalMargin * sliderElements.length;

    firstChild.css({ left: totalLeft });
    firstChild.animate({ left: totalLeft - firstChild.width() - totalHorizontalMargin });
    otherChildren.animate({ right: firstChild.width() + totalHorizontalMargin });
    sliderElements.promise().then(() => {
        firstChild.appendTo(slider);
        sliderElements.removeAttr('style');
    });
}

function getTotalHorizontalMargin(element) {
    return parseInt(element.css('marginRight'), 10) + parseInt(element.css('marginLeft'), 10);
}