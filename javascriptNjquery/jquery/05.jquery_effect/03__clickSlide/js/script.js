const moving=$('.area ul');
let timer;

slide();
function slide() {
    timer=setInterval(function(){
        moving.animate({left:-210 + 'px'}, 500, function(){
            $(this).children('li:first').insertAfter( $(this).children('li:last') );
            $(this).css({left:0})
        })
    }, 2000);
}


$('.container').hover(function(){
    clearInterval(timer);
}, function(){
    slide();
});

$('.left').on('click', function(){
    //moving.children('li:last').insertBefore( $(this).children('li:first') );
    moving.find('li:last').insertBefore( moving.find('li:first') );
    moving.css({left:-210}).stop().animate({left:0}, 500);
  
});

$('.right').on('click', function(){
    moving.stop().animate({left:-210 + 'px'}, 500, function(){
        $(this).children('li:first').insertAfter( $(this).children('li:last') );
        $(this).css({left:0})
    })

});