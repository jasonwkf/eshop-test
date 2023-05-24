$(function () {
  const mobileScreen = $(window).width() < 992;

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
  // global function declaration
  const activateSelectButton = function (item, ctaButtons) {
    $(ctaButtons).each(function () {
      $(this).removeClass('active').text('Select');
    });
    $(item).addClass('active').text('Selected');
  };

  const activateStepTwo = function () {
    $('#step-2-desktop').find('.disabled').fadeOut();
    $('.comp.card-plan-single .disabled').fadeOut();
  };

  const updateDropdownValue = function (selectedValue, dropdownOptionsSelection, dropdownSelected) {
    // set value to dropdown
    $(dropdownOptionsSelection).each(function () {
      let val = $(this).attr('value');
      let img, label;

      if (val == selectedValue) {
        $(this).attr('checked', 'checked');
        img = $(this).data('img');
        label = $(this).data('label');
        $(dropdownSelected).find('.paymentImg').show().attr('src', img);
        $(dropdownSelected).find('.label').text(label);
      }
    });
  };

  const setCatfishValue = function (item, selectedValue) {
    $(item).text(selectedValue);
  };

  const setDropdownValue = function (item, dropdownSelected, dropdownOptions, ctaButtons) {
    let value = $(item).attr('value');
    let img = $(item).data('img');
    let label = $(item).data('label');

    // set selected value
    $(dropdownSelected).find('.paymentImg').show().attr('src', img);
    $(dropdownSelected).find('.label').text(label).css({
      'font-weight': '600',
      color: '#000000',
    });
    $(dropdownSelected).toggleClass('active');
    $(dropdownOptions).toggleClass('active');

    // update desktop selection
    $(ctaButtons).each(function () {
      let id = $(this).data('id');
      $(this).removeClass('active').text('Select');

      if (id == value) {
        $(this).addClass('active').text('Selected');
      }
    });
  };

  const toggleDropdown = function (dropdownSelected, dropdownOptions) {
    $(dropdownSelected).off().on('click', function (e) {
      $(this).toggleClass('active');
      $(dropdownOptions).toggleClass('active');
    });
  };

  const displayCatfish = function () {
    // display checkout
    $('.comp-catfish-checkout').addClass('slide-up');

    // enabled checkout button
    $('#pub-submit').removeAttr('disabled');
  };

  // step 1 interaction
  if ($('#step-1-desktop').length > 0 || $('.mutli-select-pub').length > 0) {
    let pubSelectedValue;
    const pubDropdownSelected = '.mutli-select-pub.dropdown-select-selected';
    const pubDropdownOptions = '.mutli-select-pub.dropdown-select-options';
    const pubDropdownOptionsSelection = '.mutli-select-pub.dropdown-select-options .selection';
    const pubCtaButtons = '.pub-plan-single .cta-button';

    // desktop card plan select
    $('.pub-plan-single').each(function () {
      let _this = this;
      $(_this).find('.cta-button').off().on('click', function (e) {
        e.preventDefault();
        pubSelectedValue = $(this).data('id');
        activateSelectButton(this, pubCtaButtons);
        setCatfishValue('#pub-item', pubSelectedValue);
        updateDropdownValue(pubSelectedValue, pubDropdownOptionsSelection, pubDropdownSelected);

        // anchor to step 2
        setTimeout(function () {
          $('html, body').animate({
            scrollTop: $('#step-2-desktop').offset().top - 30,
          }, 800, function () {
            activateStepTwo();
          });
        }, 200);
      });
    });

    // mobile dropdown select
    toggleDropdown(pubDropdownSelected, pubDropdownOptions);
    $(pubDropdownOptionsSelection).off().on("click", function () {
      setDropdownValue(this, pubDropdownSelected, pubDropdownOptions, pubCtaButtons);
      pubSelectedValue = $(this).attr('value');
      setCatfishValue('#pub-item', pubSelectedValue);

      // anchor to step 2
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $(pubDropdownSelected).offset().top + 150,
        }, 800, function () {
          activateStepTwo();
        });
      }, 500);
    });
  }

  // step 2 interaction
  if ($('#step-2-desktop').length > 0 || $('.mutli-select-mag').length > 0) {
    let magSelectedValue;
    const magDropdownSelected = '.mutli-select-mag.dropdown-select-selected';
    const magDropdownOptions = '.mutli-select-mag.dropdown-select-options';
    const magDropdownOptionsSelection = '.mutli-select-mag.dropdown-select-options .selection';
    const magCtaButtons = '.magazine-plan-single .cta-button';

    // desktop card plan select
    $('.magazine-plan-single').each(function () {
      let _this = this;
      $(_this).find('.cta-button').on('click', function (e) {
        e.preventDefault();
        magSelectedValue = $(this).data('id');
        activateSelectButton(this, magCtaButtons);
        setCatfishValue('#mag-item', magSelectedValue);
        updateDropdownValue(magSelectedValue, magDropdownOptionsSelection, magDropdownSelected);
        displayCatfish();
      });
    });

    // mobile dropdown select
    toggleDropdown(magDropdownSelected, magDropdownOptions);
    $(magDropdownOptionsSelection).off().on("click", function () {
      setDropdownValue(this, magDropdownSelected, magDropdownOptions, magCtaButtons);
      magSelectedValue = $(this).attr('value');
      setCatfishValue('#mag-item', magSelectedValue);
      displayCatfish();
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
