/**
 * Created by Chelsea on 11/4/16.
 */

$(function() {
  $("a[href=#menuExpand]").click(function(e) {
  showHideMobile();
  e.preventDefault();
  });

  $(".mobileDimmer").click(function() {
    showHideMobile();
  });
});

function toggle_visibility(id) {
        console.log(id);
       var e = document.getElementById(id);
        console.log(e);
       if(e.style.display == 'block')
            console.log('bruh');
            //e.style.display = 'none';
       else
          e.style.display = 'block';
        console.log('bloop');
}

function showHideMobile() {
  //$( "#header" ).toggleClass(hidden);
  $(".mobileMenu").toggleClass("menuOpen");
  //toggle_visibility('header');
  $(".mobileBodyWrapper").toggleClass("menuOpen");
  $(".mobileDimmer").toggle();
  $( "#header" ).toggleClass("hidden");
  $( ".header" ).toggleClass("hidden");
    //toggle_visibility('header');
}