$('.after p:eq(2)').after('<p>after로 내용 추가</p>').css('background', 'yellow');
$('<p>after로 내용 추가</p>').insertAfter('.after p:eq(2)').css('background', 'yellow');

$('.after p:eq(0)').before('<p>before로 내용 추가</p>').css('background', 'skyblue');
$('<p>before로 내용 추가</p>').insertBefore('.after p:eq(1)').css('background', 'pink');

// append/appendTo/prepend/prependTo
const basket=$('#basket');
const apple=$('#apple');
const banana=$('#banana');
const orange=$('#orange');

// basket.append(apple);
// basket.append(orange);

// apple.appendTo(basket);

//basket.prepend(apple);
apple.prependTo(basket);

//$('#div1').show();

$('.content3').hover(function(){
    $('#div1').show();
    $('#div2').hide();
}, function(){
    $('#div1').hide();
    $('#div2').show();
})

// toggle
$('#btn').on('click', function() {
    $('img').toggle();
});

// fadeIn/faseOut
// $('#fade1').fadeIn(2000);
$('.container').mouseover(function() {
    $('#fade1').fadeIn(2000);
});

$('#fade2').fadeOut(2000);
$('#fade3').fadeTo(2000, 0.3);

$('#slide1').slideDown(2000);
$('#slide2').slideUp(2000);

$('.content6 .container').hover(function(){
    $('#slide3').slideUp(2000);
}, function(){
    $('#slide3').slideDown(2000);
});

/* animate */ // alt + shift + a
$('.box1').animate({left: 800, top:340}, 500)

$('.box2').animate({left:400}, 1000).animate({top:400}, 500);

$('.box3').delay(1500).animate({bottom:450}, 2000).animate({right:500, bottom:40}, 1000);

$('.btn1').on("click focus", function() {
    console.log('welcome');
});

$('.btn2').on({"click focus" : function() { // bind 대신 on을 사용
     console.log('클릭을 ...');
}});

$('.btn3').on({
   click:function(){
       console.log('btn3 이벤트 ...');
}, focus:function(){
       console.log('키보드 이벤트 ...');
}});

$('.btn4').click(function() {
    $(this).parent().next().css({color : 'red'})
});

$('.btn5').on({"mouseover focus": function() {
    $(this).parent().next().css({color : 'green'})
}})

$('.btn4').off('click');

$('.btn5').trigger("mouseover");

$('.btn6').click(function(e) {
    e.preventDefault();

    console.log(e);
    $('.txt1').text('나는 클릭이벤트로 내용이 변경되어버림');
});

$('.btn7').click(function(e) {
    //e.preventDefault();

    console.log(e);
    $('.txt2').text('나는 클릭이벤트로 내용이 변경되어버림');

    return false;
});

$('.btn9').click(function(e) {
    //e.preventDefault();

    console.log(e);
    $('.txt4').text('나는 클릭이벤트로 내용이 변경되어버림');

});

$('.btn8').on('dblclick', function() {
    $('.txt3').css({"background": 'red'})
});

let a=true;
$('.click').click(function() {

    if( a ) {
        $(this).text('클릭되었습니다.');
        a = false;
    } else {
        $(this).text('클릭이 반전되었습니다.');
        a =  true;
    }
    
});

$('.hover').hover(function() {
    $(this).text('마우스가 위치 하였습니다.')
}, function() {
    $(this).text('마우스가 광탈 하였습니다.')
});

$('.mouseenter').mouseenter(function(){
    $(this).text('마우스가 위치 하였습니다.')
});

$('.mouseenter').mouseleave(function(){
    $(this).text('마우스가 광탈 하였습니다.')
});

$('.mouseover').mouseover(function(){
    $(this).text('마우스가 위치 하였습니다.')
});

$('.mouseover').mouseout(function(){
    $(this).text('마우스가 광탈 하였습니다.')
});

$('#input1').focus(function(){
    $(this).addClass('active');
});

$('#input1').blur(function(){
    $(this).removeClass('active');
});

$('.animal').each(function(){
    let name=$(this).text();

    console.log(`name : [${name}]`);
});

let box11 = $('.box11');
let boxWidth  = box11.width();
let boxHeight = box11.height();
let boxFont   = box11.css('font-size');
let boxColor  = box11.css('background-color');

$('.span1').text(boxWidth);
$('.span2').text(boxHeight);
$('.span3').text(boxFont);
$('.span4').text(boxColor);

