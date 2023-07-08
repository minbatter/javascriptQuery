//==========================================================================
//
$('#content1-1').hover(function(){
    $('#content1-1').text('text메소드에서의 내용 바꿔 쓰기');
    $('#content1-1').css('color', 'deeppink');
}, function(){
    $('#content1-1').text('text메소드에서의 내용 원래대로 가기????');
    $('#content1-1').css('color', 'black');
});

$('#content1-2').hover(function(){
    $('#content1-2').html('text메소드에서의 내용 바꿔 쓰기');
}, function(){
    $('#content1-2').html('text메소드에서의 내용 원래대로 가기????');
});

$('#content1-3').text('<strong>어떻게 바뀔까요?? </strong>');
$('#content1-4').html('<strong>어떻게 바뀔까요?? </strong>');

//==========================================================================
//2.attr
let a = $('#changeThis').attr({"src": './img/img2.gif', alt:'바뀐이미지'});
console.log(a);

$('.content2 img').hover(function(){
    $(this).attr({"src": './img/img2.gif', alt:'바뀐이미지'})
}, function(){
    $(this).attr({"src": './img/img1.gif', alt:'원본이미지'})
});

//==========================================================================
//3.addClass&removeClass
$('.content3>div').hover(function(){
    $(this).addClass('add')
}, function(){
    $(this).removeClass('add')
});

//==========================================================================
//4. toggleClass
$('.click').click(function(){
    $('#imgs').find('img').toggleClass('imgToggle');
})

//==========================================================================
//5. val
$('#input1').val('테스트 필드 내용바꿔 쓰기');
$('#textarea1').val('테스트 필드 내용바꿔 쓰기');
$('#select1').val('city3');
$('#select2').val(['town2', 'town3']);

//==========================================================================
//6. height
const wid1 = $('#p1').width();
const wid2 = $('#p1').innerWidth();
const wid3 = $('#p1').outerWidth();
//console.log(wid1);
$('.width span').text(wid1);
$('.width1 span').text(wid2);
$('.width2 span').text(wid3);

$('#p2').outerWidth(250).outerHeight(350);

//position
let $text_1=$('.text_1 span');
let $text_2=$('.text_2 span');
let cntbox=$('.cnt');

let off_t = cntbox.offset().top;
let pos_t = cntbox.position().top;

$text_1.text(off_t);
$text_2.text(pos_t);

//scrollTop
let topNum = $('.top').offset().top;
console.log(topNum);
$(window).scrollTop(topNum)