$(document).ready(() => {

    $('#slider-btn-right').on('click', () => {
        const buttons = $('.slider-btn');
        buttons.prop('disabled', true);
        const firstRow = $('#slider-row-first .slider-image');
        const secondRow = $('#slider-row-second .slider-image');

        Promise.all([slideRight(firstRow), slideRight(secondRow)]).then(() => { buttons.prop('disabled', false); });
    });

    $('#slider-btn-left').on('click', () => {
        const buttons = $('.slider-btn');
        buttons.prop('disabled', true);
        const firstRow = $('#slider-row-first .slider-image');
        const secondRow = $('#slider-row-second .slider-image');

        Promise.all([slideLeft(firstRow), slideLeft(secondRow)]).then(() => { buttons.prop('disabled', false); });
    });

    const slideRight = (sliderElements) => {
        const lastChild = sliderElements.last();
        const slider = lastChild.parent();

        return sliderElements.animate({ left: lastChild.outerWidth(true) }).promise().then(() => {
            lastChild.prependTo(slider);
            sliderElements.removeAttr('style');
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
        return sliderElements.promise().then(() => {
            firstChild.appendTo(slider);
            sliderElements.removeAttr('style');
        });
    };
});