/* let section2Offset = $('.section2').offset().top;
let section3Offset = $('.section3').offset().top;
let section4Offset = $('.section4').offset().top;
let animationStarted = false;

$(window).scroll(function() {
    let sct = $(window).scrollTop();

    if (sct > section2Offset - 150 && !animationStarted) {
        animationStarted = true;
        $('.section2 .left').stop().animate({left: 0}, 500);
        $('.section2 .right').stop().delay(500).animate({right: 0}, 500);
    } else if (sct <= section2Offset - 150 && animationStarted) {
        animationStarted = false;
        $('.section2 .left').stop().delay(500).animate({left: '-100%'}, 500);
        $('.section2 .right').stop().animate({right: '-100%'}, 500);
    } 
    
});
$(window).scroll(function() {
    let sct = $(window).scrollTop();
    if (sct > section3Offset - 150) {   
        $('.section3 .left').stop().fadeIn(1000);
        $('.section3 .right').stop().delay(500).fadeIn(1000);
    }    
});


$(window).scroll(function(){
    $('.box').each(function(){
        let sct = $(window).scrollTop();
        let boxTop = $(this).offset().top;
        //console.log(boxTop)

        if( sct>boxTop-700){
            $(this).stop().animate({'top':0},500)
        }
    })
}) 
 */
function logic1() {
    let section2Offset = $('.section2').offset().top;
    let section3Offset = $('.section3').offset().top;
    let section4Offset = $('.section4').offset().top;
    let animationStarted = false;
    let animationStarted1 = false;
    let animationStarted2 = [];

    $(window).scroll(function () {
        let sct = $(window).scrollTop();

        if (sct > section2Offset - 150 && !animationStarted) {
            animationStarted = true;
            $('.section2 .left').stop().animate({ left: 0 }, 500);
            $('.section2 .right').stop().delay(500).animate({ right: 0 }, 500);
        } else if (sct <= section2Offset - 150 && animationStarted) {
            animationStarted = false;
            $('.section2 .left').stop().delay(500).animate({ left: '-100%' }, 500);
            $('.section2 .right').stop().animate({ right: '-100%' }, 500);
        }
        if (sct > section3Offset - 150 && !animationStarted1) {
            animationStarted1 = true;
            $('.section3 .left').stop().fadeIn(1000);
            $('.section3 .right').stop().delay(500).fadeIn(1000);
        } else if (sct <= section3Offset - 150 && animationStarted1) {
            animationStarted1 = false;
            $('.section3 .left').stop().fadeOut(1000);
            $('.section3 .right').stop().delay(500).fadeOut(500);
        }


    });

    $(window).scroll(function () {
        $('.box').each(function (index) {
            let sct = $(window).scrollTop();
            let boxTop = $(this).offset().top;
            let animationOffset = 1500; // 개별적인 조건에 맞게 조정 가능
    
            if (index === 0) {
                animationOffset = 1000; // 첫 번째 박스의 애니메이션 오프셋
            } else if (index >= 1) {
                animationOffset = 1400; // 두 번째 박스의 애니메이션 오프셋
            } // 필요한 만큼 추가적인 조건을 설정
    
            if (sct > boxTop - animationOffset && !animationStarted2[index]) {
                $(this).stop().animate({ 'top': '-10px', 'opacity': 1 }, 500).animate({ 'top': '0'},300);
                animationStarted2[index] = true;
            }
        });
    });
}
logic1()
