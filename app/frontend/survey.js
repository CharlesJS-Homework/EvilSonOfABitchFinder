/* eslint-env browser, jquery */

$(document).ready(() => {
  $('#survey').submit((event) => {
    let anyUnfilled = false;

    $.each($('#survey > input[type=number]'), (_, each) => {
      if (!each.value) {
        anyUnfilled = true;
        $(each).addClass('unfilled');
      } else {
        $(each).removeClass('unfilled');
      }
    });

    if (anyUnfilled) {
      event.preventDefault();
    }
  });
});
