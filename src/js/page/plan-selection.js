$(function () {
  // panel interaction
  $('#cta-m-one').on('click', function (e) {
    e.preventDefault();
    if ($(window).width() < 992) {
      console.log('trigger');
      $('html, body').animate({
        scrollTop: $('#step-1-mobile').offset().top - 64,
      }, 1000);
    } else {
      $('html, body').animate({
        scrollTop: $('#step-1-desktop').offset().top - 30,
      }, 1000);
    }
  });
  // plan selection
  $('.pub-plan-single > .cta-button').on('click', function (e) {
    e.preventDefault();
    // code here
  });

  // magazine selection
  $('.magazine-plan-single > .cta-button').on('click', function (e) {
    e.preventDefault();
    // code here
  });

  $(".dropdown-select-selected.mutli-select-pub .selected").on("click", function () {
    $(".dropdown-select-options.mutli-select-pub").fadeToggle(300);
  });

  $(".dropdown-select-selected.mutli-select-mag .selected").on("click", function () {
    $(".dropdown-select-options.mutli-select-mag").fadeToggle(300);
  });

  $(".mutli-select-pub .selection").on("click", function () {
    // code here
  });

  $(".mutli-select-mag .selection").on("click", function () {
    // code here
  });

  // form submit
  $('.comp-catfish-checkout').on('submit', function (e) {
    e.preventDefault();
    let postObj = {
      publication: $(this).find('input').eq(0).val(),
      magazine: $(this).find('input').eq(1).val(),
    };
    console.lg(postObj, 'Checkout');
  });

  // m1 reselect prompt
  $('#reselect-prompt').on('click', function (e) {
    e.preventDefault();
    // code here
  });
});
