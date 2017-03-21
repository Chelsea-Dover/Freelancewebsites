/**
 * Created by Chelsea on 11/4/16.
 */

$(function openNav() {
    $(' .icon ').click(function (e) {
        $(' #navLinks ').toggleClass('navShow').toggleClass('topnav');
    })
});

$(document).ready(function () {
    $('a[href$="/' + location.pathname.split("/")[1] + '"]').addClass('current');
});