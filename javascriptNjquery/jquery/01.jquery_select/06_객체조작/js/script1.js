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