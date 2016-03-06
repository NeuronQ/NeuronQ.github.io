$(document).ready(function () {
    'use strict';

    $('.nav-links > li').each(function () {
        $(this).height($(this).find('a').outerWidth());
    });
});
