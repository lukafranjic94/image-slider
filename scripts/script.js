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

        sliderElements.animate({ left: lastChild.outerWidth(true) }).promise().then(() => {
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
        const totalLeft = slider.width();

        firstChild.css({ left: totalLeft });
        firstChild.animate({ left: totalLeft - firstChild.outerWidth(true) });
        otherChildren.animate({ right: firstChild.outerWidth(true) });
        sliderElements.promise().then(() => {
            firstChild.appendTo(slider);
            sliderElements.each((i, elem) => {
                $(elem).removeAttr('style');
            });
        });
    };
});