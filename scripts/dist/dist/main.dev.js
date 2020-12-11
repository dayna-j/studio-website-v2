"use strict";

$(document).ready(function () {
  var mobileFooter = $('.mobile-footer');
  var mobileOverlayClose = $('.mobile-overlay-close'); //////////

  var hamburgerButton = $('.hamburger-button');
  var mobileOverlay = $('.mobile-overlay');

  if (window.matchMedia('(max-width:480px)').matches) {
    mobileFooter.toggle();
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() == 0 && window.matchMedia('(max-width:480px)').matches) {
      if (mobileFooter.is(":hidden")) {
        mobileFooter.toggle();
      }
    } else {
      if (!mobileFooter.is(":hidden")) {
        mobileFooter.toggle();
      }
    }
  });
  hamburgerButton.click(function () {
    //if the mobile menu is already loaded, do nothing
    //if the mobile menu is not loaded, load it
    if (!mobileOverlay.hasClass('mobile-overlay-active')) {
      mobileOverlay.toggleClass('mobile-overlay-active');
    }
  });
  mobileOverlayClose.click(function () {
    if (mobileOverlay.hasClass('mobile-overlay-active')) {
      mobileOverlay.toggleClass('mobile-overlay-active');
    }
  });
});