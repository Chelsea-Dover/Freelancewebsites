/**
 * Created by Chelsea on 10/24/16.
 */

//$(' .resourceHeader ').click(function(){
//    $(this).toggleClass('openresource');
//    $(this).parent().next().next().toggle();
//    console.log(this);
//});

$(' .reIcon ').click(function(){
    $(this).toggleClass('openresource').toggleClass('resourceHeader');
    $(this).parent().next().next().toggle();
});

//$(' .opencoachingHeader ').click(function(){
//    $(this).toggleClass('coachingHeader');
//    $(this).next().toggle()
//});

//$(' .reIcon ').click(function(){
//    $(this).toggleClass('openresource').toggleClass('resourceHeader');
//    $(this).parent().next().next().toggle();
//    console.log(this);
//});