$(document).ready(() => {

    $('#slider-btn-right').on('click', () => {
        const firstRow = $('#slider-row-first .slider-image');
        const secondRow = $('#slider-row-second .slider-image');

        slideRight(firstRow);
        slideRight(secondRow);
    });

    $('#slider-btn-left').on('click', () => {
        const firstRow = $('#slider-row-first .slider-image');
        const secondRow = $('#slider-row-second .slider-image');

        slideLeft(firstRow);
        slideLeft(secondRow);
    });

    const slideRight = (sliderElements) => {
        const lastChild = sliderElements.last();
        const slider = lastChild.parent();
        const totalHorizontalMargin = getTotalHorizontalMargin(lastChild);

        sliderElements.animate({ left: lastChild.width() + totalHorizontalMargin }).promise().then(() => {
            lastChild.prependTo(slider);
            sliderElements.each((i, elem) => {
                $(elem).removeAttr('style');
            });
        });
    };

    const slideLeft = (sliderElements) => {
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
            sliderElements.each((i, elem) => {
                $(elem).removeAttr('style');
            });
        });
    };

    const getTotalHorizontalMargin = (element) => {
        return parseInt(element.css('marginRight'), 10) + parseInt(element.css('marginLeft'), 10);
    };
});