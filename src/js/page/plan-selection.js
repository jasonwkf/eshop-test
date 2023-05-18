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
  // Desktop Step1: Select Publication
  $('.plan-cta > .pub-plan-single > .cta-button').on('click', function (e) {
    e.preventDefault();
    const allButtons = document.querySelectorAll('.pub-plan-single > .cta-button.button-text');
    allButtons.forEach(btn => {
      btn.classList.remove("cta-button-active");
      btn.innerHTML = "select";
    });
    e.target.classList.add("cta-button-active");
    e.target.innerHTML = "selected";
    // SELECT any publication, the step2 part should be active
    $(".section-container > .section-body > .disabled").remove();
    // auto scroll to step2
    $('html, body').animate({
      scrollTop: $('#step-2-desktop').offset().top - 230,
    }, 1000);
    // set pub img and name in mobile dropdown
    const mobilePubOptions = document.querySelectorAll(".dropdown-select-options.mutli-select-pub input");
    let pubMobileImgSrc = '';
    mobilePubOptions.forEach(option => {
      if (option.dataset.label === e.target.dataset.id) {
        pubMobileImgSrc = option.dataset.img;
      }
    });
    $(".mutli-select-pub .paymentImg").attr("src", pubMobileImgSrc);
    $('.mutli-select-pub .label.placeholder').text(e.target.dataset.id).css({ color: '#000' });
    $(".comp.card-plan-single .disabled").remove();
    // Set the Publication Name in the Summary Widget
    $('#pub-item-input').attr("hidden", false).val(e.target.dataset.id).css({
      border: 'none',
      fontSize: '18px',
      marginTop: '8px',
    });
  });

  // Desktop Step2: Select Magazine
  $('.magazine-plan-single > .cta-button').on('click', function (e) {
    e.preventDefault();
    const allButtons = document.querySelectorAll('.magazine-plan-single > .cta-button.button-text');
    allButtons.forEach(btn => {
      btn.classList.remove("cta-button-active");
      btn.innerHTML = "select";
    });
    e.target.classList.add("cta-button-active");
    e.target.innerHTML = "selected";
    // set magazine img and name in mobile dropdown
    const mobileMagOptions = document.querySelectorAll(".dropdown-select-options.mutli-select-mag input");
    let magMobileImgSrc = '';
    mobileMagOptions.forEach(option => {
      if (option.dataset.label === e.target.dataset.id) {
        magMobileImgSrc = option.dataset.img;
      }
    });
    $(".mutli-select-mag .paymentImg").attr("src", magMobileImgSrc);
    $('.mutli-select-mag .label.placeholder').text(e.target.dataset.id).css({ color: '#000' });
    // Show Product Summary Widget
    $(".comp.comp-catfish-checkout").css({
      visibility: 'visible',
      transform: 'translateY(0px)',
    });
    $(".comp.comp-catfish-checkout button").prop("disabled", false);
    // Set the Magazine Name in the Summary Widget
    $('#mag-item-input').attr("hidden", false).val(e.target.dataset.id).css({
      border: 'none',
      fontSize: '18px',
      marginTop: '8px',
    });
  });

  // The State Switch of all the Dropdowns
  $(".dropdown-select-selected.mutli-select-pub .selected").on("click", function () {
    $(".dropdown-select-options.mutli-select-pub").fadeToggle(300);
  });

  $(".dropdown-select-selected.mutli-select-mag .selected").on("click", function () {
    $(".dropdown-select-options.mutli-select-mag").fadeToggle(300);
  });

  // Mobile Step1: Open Dropdown and Select Publication
  $(".mutli-select-pub .selection").on("click", function (e) {
    // fill the selection image and title
    $(".mutli-select-pub .paymentImg").attr("src", e.target.dataset.img);
    $('.mutli-select-pub .label.placeholder').val(e.target.dataset.label).text(e.target.dataset.label).css({ color: '#000' });
    // set pub selected in desktop
    const allButtons = document.querySelectorAll('.pub-plan-single > .cta-button.button-text');
    const pubName = e.target.dataset.label;
    allButtons.forEach(btn => {
      btn.classList.remove("cta-button-active");
      btn.innerHTML = "select";
      if (btn.dataset.id === pubName) {
        btn.classList.add("cta-button-active");
        btn.innerHTML = "selected";
      }
    });
    $(".section-container > .section-body > .disabled").remove();
    $(".dropdown-select-options.mutli-select-pub").fadeToggle(300);
    // Select any one of the publications, the step2 part should be active
    $(".comp.card-plan-single .disabled").remove();
    // Set the Publication Name in the Summary Widget
    $('#pub-item-input').attr("hidden", false).val(e.target.dataset.label).css({
      border: 'none',
      backGround: 'transparent',
      fontSize: '16px',
      marginTop: '12px',
    });
  });

  // Mobile Step2: Open Dropdown and Select Magazine
  $(".mutli-select-mag .selection").on("click", function (e) {
    $(".mutli-select-mag .paymentImg").attr("src", e.target.dataset.img);
    $(".mutli-select-mag .label.placeholder").val(e.target.dataset.label).text(e.target.dataset.label).css({ color: '#000' });
    // set pub selected in desktop
    const allButtons = document.querySelectorAll('.magazine-plan-single > .cta-button.button-text');
    const magName = e.target.dataset.label;
    allButtons.forEach(btn => {
      btn.classList.remove("cta-button-active");
      btn.innerHTML = "select";
      if (btn.dataset.id === magName) {
        btn.classList.add("cta-button-active");
        btn.innerHTML = "selected";
      }
    });
    $(".dropdown-select-options.mutli-select-mag").fadeToggle(300);
    // Show Product Summary Widget
    $(".comp.comp-catfish-checkout").css({
      visibility: 'visible',
      transform: 'translateY(0px)',
    });
    $(".comp.comp-catfish-checkout button").prop("disabled", false);
    // Set the Magazine Name in the Summary Widget
    $('#mag-item-input').attr("hidden", false).val(e.target.dataset.label).css({
      border: 'none',
      backGround: 'transparent',
      fontSize: '16px',
      marginTop: '12px',
    });
  });

  // Reset
  // Hidden the Summary Widget and Clear the selected info and add the disabled area.
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
    allButtons.forEach(btn => {
      btn.classList.remove("cta-button-active");
      btn.innerHTML = "select";
    });
    $('#step-2-desktop .section-body').append('<div class="disabled"></div>');
    // For mobile, there is no 'step-2-mobile' id, so in real develop work, I will add this id and append the disabled area.
    $(".mutli-select-pub .paymentImg").attr("src", "");
    $(".mutli-select-mag .paymentImg").attr("src", "");
    $('#pub-item-input').attr("hidden", true);
    $('#mag-item-input').attr("hidden", true);
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
