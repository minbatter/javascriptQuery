const menu = $('#nav>li');

menu.hover(function() {
     let target = $(this);
     let onImg  = target.find('.text-image>.on');
     let offImg = target.find('.text-image>.off');
     let menuImg = target.find('.menu-image');
     let imageHeight = target.find('.menu-image img').innerHeight();
     //console.log(imageHeight);

     onImg.css('display',  'block');
     offImg.css('display', 'none');

     menuImg.stop().animate({height : imageHeight}, 500);

}, function() {
    let target = $(this);
    let onImg  = target.find('.text-image>.on');
    let offImg = target.find('.text-image>.off');
    let menuImg = target.find('.menu-image');
    let imageHeight = 0;
    //console.log(imageHeight);
        
    menuImg.stop().animate({height : imageHeight}, 500);

    onImg.css('display',  'none');
    offImg.css('display', 'block');
});