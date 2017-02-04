/**
 * Created by Chelsea on 11/4/16.
 */

$(function openNav() {
    $(' .icon ').click(function(e) {
        console.log('bruh');
        $(' #navLinks ').toggleClass('navShow').toggleClass('topnav');
    })
});