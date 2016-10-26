/**
 * Created by Chelsea on 10/24/16.
 */

$(' .resourceHeader ').click(function(){
    $(this).toggleClass('openresource');
    $(this).next().next().toggle()
});
