/**
 * Created by Chelsea on 10/24/16.
 */
$( document ).ready(function() {
    var heightNum = 268;
    console.log( "ready!" );
    $(' .readMore ').click(function(){
        //console.log( heightNum );
        $( this).parent().css('height', '100%');
        $(this).next().removeClass('hidden');
        $(this).addClass('hidden');
        //heightNum = 268;
    });
    $(' .readLess ').click(function(){
        //console.log( heightNum );
        $( this).parent().css('height', '268px');
        $(this).prev().removeClass('hidden');
        $(this).addClass('hidden');
        //heightNum = 268;
    })
});