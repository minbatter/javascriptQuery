
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

// 페이지네이션
function move1(i){
    if(current==i) return;

    let currentEl=banner.eq(current); //현재값
    let nextEl=banner.eq(i); // 내가 클릭하는 값
    currentEl.css('left', 0).stop().animate({left:'-100%'}, 500);
    nextEl.css('left', '100%').stop().animate({left:0}, 500);

    current = i;
}

function move2(i){
    if(current==i) return;

    let currentEl=banner.eq(current); //현재값
    let nextEl=banner.eq(i); // 내가 클릭하는 값
    currentEl.css('left', 0).stop().animate({left:'100%'}, 500);
    nextEl.css('left', '-100%').stop().animate({left:0}, 500);

    current = i;
}

btn.click(function(){
    let tg = $(this);
    let i=tg.index();

    btn.removeClass('on');
    tg.addClass('on');
    if( current > i ){
        move2(i);
    } else {
        move1(i);
    }
});