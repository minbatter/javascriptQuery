$('.cross div').css({opacity:0, background:"#fff"});
$('.banner').hover(function(){
    const th=$(this);

    const thx1=th.find('.x1');
    const thx2=th.find('.x2');
    const thy1=th.find('.y1');
    const thy2=th.find('.y2');

    thx1.css('opacity', .2).stop().animate({height:'0%'}, 500);
    thx2.css('opacity', .2).stop().animate({height:'0%'}, 500);
    thy1.css('opacity', .2).stop().animate({width:'0%'},  500);
    thy2.css('opacity', .2).stop().animate({width:'0%'},  500);

}, function(){
    const th=$(this);

    const thx1=th.find('.x1');
    const thx2=th.find('.x2');
    const thy1=th.find('.y1');
    const thy2=th.find('.y2');

    thx1.stop().animate({height:'50%', opacity:0}, 500);
    thx2.stop().animate({height:'50%', opacity:0}, 500);
    thy1.stop().animate({width :'50%', opacity:0}, 500);
    thy2.stop().animate({width :'50%', opacity:0}, 500);
});
