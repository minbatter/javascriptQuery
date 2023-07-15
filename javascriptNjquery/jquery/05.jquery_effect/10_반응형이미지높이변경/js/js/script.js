let boxWidth = $('img').width();
let boxHeight = $('img').height();
$('#main').height(boxHeight);

$(window).resize(function() {
    boxWidth = $('img').width();
    boxHeight = $('img').height();

    if(boxHeight<1920) {
       $('#main').height(boxHeight);
    }
});