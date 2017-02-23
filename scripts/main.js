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
  
  $('.do-expand-or-collapse-all-skills').on('click', function (e) {
    e.preventDefault();
    if ($(this).find('.text-collapse').hasClass('hide')) {
      $('section.skills .collapsible-header:not(.active)').click();
      $(this).find('.text-expand').addClass('hide')
      $(this).find('.text-collapse').removeClass('hide')
    } else {
      $('section.skills .collapsible-header.active').click();
      $(this).find('.text-expand').removeClass('hide')
      $(this).find('.text-collapse').addClass('hide')
    }
  })
});
