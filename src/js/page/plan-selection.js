$(function () {
  var mobileScreen = $(window).width() < 992;

  // panel interaction
  $('#cta-m-one').on('click', function (e) {
    e.preventDefault();
    if (mobileScreen) {
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
  // step 1 interaction
  if ($('.pub-plan-single').length > 0) {
    $('.pub-plan-single').each(function () {
      var _this = this;

      $(_this).find('.cta-button').on('click', function (e) {
        // disable redirection
        e.preventDefault();

        // activate selected button
        const ctaButtons = $('.pub-plan-single .cta-button');
        ctaButtons.each(function () {
          $(this).removeClass('active').text('Select');
        });
        $(this).addClass('active').text('Selected');

        // set value to catfish checkout
        var id = $(this).data('id');
        $('#pub-item').text(id);

        // anchor to step 2
        if (mobileScreen) {
          $('html, body').animate({
            scrollTop: $('#step-2-mobile').offset().top - 64,
          }, 1000);
        } else {
          $('html, body').animate({
            scrollTop: $('#step-2-desktop').offset().top - 30,
          }, 1000, function () {
            // animation complete
            $('#step-2-desktop').find('.disabled').fadeOut();
          });
        }
      });
    });
  }

  // step 2 interaction
  if ($('.magazine-plan-single').length > 0) {
    $('.magazine-plan-single').each(function () {
      var _this = this;

      $(_this).find('.cta-button').on('click', function (e) {
        // disable redirection
        e.preventDefault();

        // activate selected button
        const ctaButtons = $('.magazine-plan-single .cta-button');
        ctaButtons.each(function () {
          $(this).removeClass('active').text('Select');
        });
        $(this).addClass('active').text('Selected');

        // set value to catfish checkout
        var id = $(this).data('id');
        $('#mag-item').text(id);

        // display checkout
        $('.comp-catfish-checkout').addClass('slide-up');

        // enabled checkout button
        $('#pub-submit').removeAttr('disabled');
      });
    });
  }

  // form submit
  $('.comp-catfish-checkout').on('submit', function (e) {
    e.preventDefault();
    let postObj = {
      publication: $(this).find('input').eq(0).val(),
      magazine: $(this).find('input').eq(1).val(),
    };
    console.log(postObj, 'Checkout');
  });

  // m1 reselect prompt
  $('#reselect-prompt').on('click', function (e) {
    e.preventDefault();
    // code here
  });
});
