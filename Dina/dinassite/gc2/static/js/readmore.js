/**
 * Created by Chelsea on 10/24/16.
 */
$( document ).ready(function() {
    console.log( "ready!" );
    $(' .readMore ').click(function(){
        //$( this ).parent().css('height', '100%');
        $( this ).prev().children(':nth-child(2)').nextAll().removeClass('hidden');
        $( this ).next().removeClass('hidden');
        $( this ).addClass('hidden');
        $('blockquote').flowtype({
            minimum: 500,
            maximum: 1200,
            minFont : 15,
            maxFont : 20
        });
        $('p').flowtype({
            minimum: 500,
            maximum: 1200,
            minFont : 10,
            maxFont : 19
        });
    });

    $(' .readLess ').click(function(){
        $(' .secondChild ').nextAll().addClass('hidden');
        $( this ).prev().removeClass('hidden');
        $( this ).addClass('hidden');
        $('p').flowtype({
            minimum: 500,
            maximum: 1200,
            minFont : 10,
            maxFont : 19
        });
    });

    $(' .servicesReadMore ').click(function(){
        $( this ).prev().removeClass('hidden');
        $( this ).addClass('hidden');
        $(this).next().removeClass('hidden');
        console.log('bruh');
        $('p').flowtype({
            minimum: 500,
            maximum: 1200,
            minFont : 10,
            maxFont : 19
        });
        $('li').flowtype({
            minimum: 400,
            maximum: 1200,
            minFont : 10,
            maxFont : 20,
            fontRatio : 30
        });
        $('h2').flowtype({
            minimum: 400,
            maximum: 1200,
            minFont : 10,
            maxFont : 29
        });
    });
    $(' .servicesReadLess ').click(function(){
        $( this ).prev().prev().addClass('hidden');
        $( this ).addClass('hidden');
        $(this).prev().removeClass('hidden');
        $('p').flowtype({
            minimum: 500,
            maximum: 1200,
            minFont : 10,
            maxFont : 19
        });
        $('li').flowtype({
            minimum: 400,
            maximum: 1200,
            minFont : 10,
            maxFont : 20,
            fontRatio : 30
        });
    });



});