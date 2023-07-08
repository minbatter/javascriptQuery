const menu = $('#nav>li');

menu.hover(function() {
     close();

     let target = $(this);
     let onImg  = target.find('.text-image>.on');
     let offImg = target.find('.text-image>.off');
     let menuImg = target.find('.menu-image');
     let imageWidth = target.find('.menu-image img').innerWidth();
     console.log(imageWidth);

     onImg.css('display',  'block');
     offImg.css('display', 'none');

    menuImg.stop().animate({width : imageWidth }, 500);

}, function() {
    let target = $(this);
    let onImg  = target.find('.text-image>.on');
    let offImg = target.find('.text-image>.off');
    let menuImg = target.find('.menu-image');
    let imageWidth = 0;
    //console.log(imageHeight);
    
    onImg.css('display',  'none');
    offImg.css('display', 'block');

    menuImg.stop().animate({width : imageWidth}, 500);
    
    open();
});

open();
function open() {
    let target = $('#nav>li').eq(2); // 3번째 그림
    let onImg  = target.find('.text-image>.on');
    let offImg = target.find('.text-image>.off');
    let menuImg = target.find('.menu-image');
    let imageWidth = target.find('.menu-image img').innerWidth();

    onImg.css('display',  'block');
    offImg.css('display', 'none');

    menuImg.stop().animate({width : imageWidth }, 500);
};

function close() {
    let target = $('#nav>li').eq(2); // 3번째 그림
    let onImg  = target.find('.text-image>.on');
    let offImg = target.find('.text-image>.off');
    let menuImg = target.find('.menu-image');
    let imageWidth = 0;
    //console.log(imageHeight);
    
    onImg.css('display',  'none');
    offImg.css('display', 'block');
    menuImg.stop().animate({width : imageWidth}, 500);

    
};