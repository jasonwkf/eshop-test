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
    $(dropdownSelected).find('.label').text(label);
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
    $('.pub-plan-single').each(function () {
      let _this = this;
      let selectedValue;
      const dropdownSelected = '.mutli-select-pub.dropdown-select-selected';
      const dropdownOptions = '.mutli-select-pub.dropdown-select-options';
      const dropdownOptionsSelection = '.mutli-select-pub.dropdown-select-options .selection';
      const ctaButtons = '.pub-plan-single .cta-button';

      // desktop card plan select
      $(_this).find('.cta-button').on('click', function (e) {
        e.preventDefault();
        selectedValue = $(this).data('id');
        activateSelectButton(this, ctaButtons);
        setCatfishValue('#pub-item', selectedValue);
        updateDropdownValue(selectedValue, dropdownOptionsSelection, dropdownSelected);

        // anchor to step 2
        setTimeout(function () {
          $('html, body').animate({
            scrollTop: $('#step-2-desktop').offset().top - 30,
          }, 800, function () {
            activateStepTwo();
          });
        }, 200);
      });

      // mobile dropdown select
      toggleDropdown(dropdownSelected, dropdownOptions);
      $(dropdownOptionsSelection).off().on("click", function () {
        setDropdownValue(this, dropdownSelected, dropdownOptions, ctaButtons);
        selectedValue = $(this).attr('value');
        setCatfishValue('#pub-item', selectedValue);

        // anchor to step 2
        setTimeout(function () {
          $('html, body').animate({
            scrollTop: $(dropdownSelected).offset().top + 180,
          }, 800, function () {
            activateStepTwo();
          });
        }, 500);
      });
    });
  }

  // step 2 interaction
  if ($('#step-2-desktop').length > 0 || $('.mutli-select-mag').length > 0) {
    $('.magazine-plan-single').each(function () {
      let _this = this;
      let selectedValue;
      const dropdownSelected = '.mutli-select-mag.dropdown-select-selected';
      const dropdownOptions = '.mutli-select-mag.dropdown-select-options';
      const dropdownOptionsSelection = '.mutli-select-mag.dropdown-select-options .selection';
      const ctaButtons = '.magazine-plan-single .cta-button';

      // desktop card plan select
      $(_this).find('.cta-button').on('click', function (e) {
        e.preventDefault();
        selectedValue = $(this).data('id');
        activateSelectButton(this, ctaButtons);
        setCatfishValue('#mag-item', selectedValue);
        updateDropdownValue(selectedValue, dropdownOptionsSelection, dropdownSelected);
        displayCatfish();
      });

      // mobile dropdown select
      toggleDropdown(dropdownSelected, dropdownOptions);
      $(dropdownOptionsSelection).off().on("click", function () {
        setDropdownValue(this, dropdownSelected, dropdownOptions, ctaButtons);
        selectedValue = $(this).attr('value');
        setCatfishValue('#mag-item', selectedValue);
        displayCatfish();
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
