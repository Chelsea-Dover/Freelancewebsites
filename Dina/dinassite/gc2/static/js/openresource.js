/**
 * Created by Chelsea on 10/24/16.
 */

$(' .reIcon ').click(function(){
    $(this).toggleClass('openresource').toggleClass('resourceHeader');
    $(this).parent().next().next().toggle();
});
