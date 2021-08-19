"use strict";

$(document).ready(function () {
  $('#slider-btn-right').on('click', function () {
    var buttons = $('.slider-btn');
    buttons.prop('disabled', true);
    var firstRow = $('#slider-row-first .slider-image');
    var secondRow = $('#slider-row-second .slider-image');
    Promise.all([slideRight(firstRow), slideRight(secondRow)]).then(function () {
      buttons.prop('disabled', false);
    });
  });
  $('#slider-btn-left').on('click', function () {
    var buttons = $('.slider-btn');
    buttons.prop('disabled', true);
    var firstRow = $('#slider-row-first .slider-image');
    var secondRow = $('#slider-row-second .slider-image');
    Promise.all([slideLeft(firstRow), slideLeft(secondRow)]).then(function () {
      buttons.prop('disabled', false);
    });
  });

  var slideRight = function slideRight(sliderElements) {
    var lastChild = sliderElements.last();
    var slider = lastChild.parent();
    return sliderElements.animate({
      left: lastChild.outerWidth(true)
    }).promise().then(function () {
      lastChild.prependTo(slider);
      sliderElements.removeAttr('style');
    });
  };

  var slideLeft = function slideLeft(sliderElements) {
    var firstChild = sliderElements.first();
    var otherChildren = sliderElements.slice(1);
    var slider = firstChild.parent();
    var totalLeft = slider.width();
    firstChild.css({
      left: totalLeft
    });
    firstChild.animate({
      left: totalLeft - firstChild.outerWidth(true)
    });
    otherChildren.animate({
      right: firstChild.outerWidth(true)
    });
    return sliderElements.promise().then(function () {
      firstChild.appendTo(slider);
      sliderElements.removeAttr('style');
    });
  };
});