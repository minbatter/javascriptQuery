const topLine     = $('.topLine');
const bottomLine  = $('.bottomLine');
const leftLine    = $('.leftLine');
const rightLine   = $('.rightLine');

$('.animate').on('mouseover', function() {
    $(this).find(topLine).css('left', '-100%').stop().animate({left:0}, 500);
    $(this).find(bottomLine).css('left', '100%').stop().animate({left:0}, 500);
    $(this).find(leftLine).css('top', '-100%').stop().animate({top:0}, 500);
    $(this).find(rightLine).css('top', '100%').stop().animate({top:0}, 500);
});

$('.animate').on('mouseout', function() {
    $(this).find(topLine).stop().animate({left:"-100%"}, 500);
    $(this).find(bottomLine).stop().animate({left:'100%'}, 500);
    $(this).find(leftLine).stop().animate({top:'-100%'}, 500);
    $(this).find(rightLine).stop().animate({top:'100%'}, 500);
});