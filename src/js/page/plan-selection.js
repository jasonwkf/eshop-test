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

  // code here

  $(".dropdown-select-selected.mutli-select-pub .selected").on("click", function () {
    $(".dropdown-select-options.mutli-select-pub").fadeToggle(300);
    $(".dropdown-select-selected.mutli-select-pub").css("background-image", "url(../images/icons/ArrowUp.svg)");
  });

  $(".mutli-select-pub .selection").on("click", function (e) {
    $(".mutli-select-pub .paymentImg").attr("src", e.target.dataset.img);
    $('.mutli-select-pub .label.placeholder').val(e.target.dataset.label).text(e.target.dataset.label).css({ color: '#000' });
    $(".dropdown-select-options.mutli-select-pub").fadeToggle(300);
    $(".dropdown-select-selected.mutli-select-pub").css("background-image", "url(../images/icons/ArrowDown.svg)");
    $(".comp.card-plan-single .disabled").removeClass("disabled");
    $('#pub-item-input').val(e.target.dataset.label).addClass('product-summary').attr("disabled", true);
  });

  $(".dropdown-select-selected.mutli-select-mag .selected").on("click", function () {
    $(".dropdown-select-options.mutli-select-mag").fadeToggle(300);
    $(".dropdown-select-selected.mutli-select-mag").css("background-image", "url(../images/icons/ArrowUp.svg)");
  });

  $(".mutli-select-mag .selection").on("click", function (e) {
    $(".mutli-select-mag .paymentImg").attr("src", e.target.dataset.img);
    $(".mutli-select-mag .label.placeholder").val(e.target.dataset.label).text(e.target.dataset.label).css({ color: '#000' });
    $(".dropdown-select-options.mutli-select-mag").fadeToggle(300);
    $(".dropdown-select-selected.mutli-select-mag").css("background-image", "url(../images/icons/ArrowDown.svg)");
    $(".comp.comp-catfish-checkout").css({
      visibility: 'visible',
      transform: 'translateY(0px)',
    });
    $(".comp.comp-catfish-checkout button").prop("disabled", false);
    $('#mag-item-input').val(e.target.dataset.label).addClass('product-summary').attr("disabled", true);
  });

  $('.pub-plan-single > .cta-button').on('click', function (e) {
    e.preventDefault();
    const allButtons = document.querySelectorAll('.pub-plan-single > .cta-button.button-text');
    allButtons.forEach(btn => btn.classList.remove("btn-n-active"));
    e.target.classList.add("btn-n-active");
    $(".section-container > .section-body > div").removeClass("disabled");
    $('#pub-item-input').val(e.target.dataset.id).addClass('product-summary').attr("disabled", true);
  });

  $('.magazine-plan-single > .cta-button').on('click', function (e) {
    e.preventDefault();
    const allButtons = document.querySelectorAll('.magazine-plan-single > .cta-button.button-text');
    allButtons.forEach(btn => btn.classList.remove("btn-n-active"));
    e.target.classList.add("btn-n-active");
    $(".comp.comp-catfish-checkout").css({
      visibility: 'visible',
      transform: 'translateY(0px)',
    });
    $(".comp.comp-catfish-checkout button").prop("disabled", false);
    $('#mag-item-input').val(e.target.dataset.id).addClass('product-summary').attr("disabled", true);
  });

  $(".catfish-header .toggle").on("click", function () {
    $(".comp.comp-catfish-checkout").css({
      visibility: 'hidden',
      transform: 'translateY(300px)',
    });
  });

  $(".comp.comp-catfish-checkout button").on("click", function () {
    $(".comp.comp-catfish-checkout").css({
      visibility: 'hidden',
      transform: 'translateY(300px)',
    });
    const allButtons = document.querySelectorAll('.cta-button.button-text');
    allButtons.forEach(btn => btn.classList.remove("btn-n-active"));
    $(".mutli-select-pub .paymentImg").attr("src", "");
    $(".mutli-select-mag .paymentImg").attr("src", "");
    $('.mutli-select-pub .label.placeholder').val('Select Publication').text('Select Publication').css({ color: '#808080' });
    $('.mutli-select-mag .label.placeholder').val('Select Publication').text('Select Publication').css({ color: '#808080' });
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
