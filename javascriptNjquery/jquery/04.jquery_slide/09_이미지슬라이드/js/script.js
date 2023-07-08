
let current=0;
const banner=$('#wrap .slideUl li');
const btn=$('.buttonList li');
let setIntervalId;

slide();

function slide() {
    setIntervalId = setInterval(function(){
        let prev=banner.eq(current);
        let prevBtn=btn.eq(current);
        move(prev, 0, '-100%');
        prevBtn.removeClass('on')
        current++;
        if( current == banner.length ) current = 0;
        let next = banner.eq(current);
        let nextBtn=btn.eq(current);
        nextBtn.addClass('on');
        move(next, '100%', 0);
    }, 2000);
}

$('.slide').on({mouseover:function(){
    clearInterval(setIntervalId);
}, mouseout:function(){
     slide();
}});

function move(tg, start, end) {
    tg.css('left', start).stop().animate({left:end}, 500);
}

$('.next').on('click', function() {
    let prev=banner.eq(current);
    let prevBtn=btn.eq(current);
    move(prev, 0, '-100%');
    prevBtn.removeClass('on')
    current++;
    if( current == banner.length ) current = 0;
    let next = banner.eq(current);
    let nextBtn=btn.eq(current);
    nextBtn.addClass('on');
    move(next, '100%', 0);
});

$('.prev').on('click', function() {
    let prev=banner.eq(current);
    let prevBtn=btn.eq(current);
    move(prev, 0, '100%');
    prevBtn.removeClass('on')
    current--;
    if( current == -banner.length ) current = 0;
    let next = banner.eq(current);
    let nextBtn=btn.eq(current);
    nextBtn.addClass('on');
    move(next, '-100%', 0);
});

