$(document).ready(function () {
  'use strict';

  $('.nav-links > li').each(function () {
      $(this).height($(this).find('a').outerWidth());
  });

  setTimeout(function () {
    $('body').removeClass('expanded-nav');
  }, 4000);

  $('.toggle-sidebar').on('click', function () {
    $('body').toggleClass('expanded-nav');
  });
});
