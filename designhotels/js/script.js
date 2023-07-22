const appbar=$('.app-bar-wrap .appbarBt');
const mobileMenu=$('.mobile-menu');
const appbarCloseBt=$('.appbarCloseBt');

appbar.on('click', function(){
    mobileMenu.stop().animate({left:0}, 500);
    $('.header-mobile-menu').stop().animate({left:'100%'}, 500);
});

appbarCloseBt.on('click', function(){
    mobileMenu.stop().animate({left:'-100%'}, 500);
    $('.header-mobile-menu').stop().animate({left:0}, 500);
});

// 비디오
let winW=$(window).innerWidth();
let winH=$(window).innerHeight();
let vidH=$('#mainVideo').innerHeight();
let vidW=$('#mainVideo').innerWidth();
/* 
console.log(winW);
console.log(winH);
console.log(vidW);
console.log(vidH); 
*/

let videoPlay  = 'on';
let soundMuted = 'off';

$('#mainVideo').get(0).autoplay=true;
$('#mainVideo').get(0).loop=0;
$('#mainVideo').get(0).muted=true;

$('.video').css({width:'100%', height: winH});

if( winH > vidH ) {
    $('#mainVideo').css({width:'auto', height:winH})
}
if( winW > vidW ) {
    $('#mainVideo').css({width:winW, height:'auto'})
}

$(window).resize(videoResizeFn);

function videoResizeFn() {
    winW=$(window).innerWidth();
    winH=$(window).innerHeight();
    vidH=$('#mainVideo').innerHeight();
    vidW=$('#mainVideo').innerWidth();

    $('.video').css({width:'100%', height: winH});

    if( winH > vidH ) {
        $('#mainVideo').css({width:'auto', height:winH})
    }
    if( winW > vidW ) {
        $('#mainVideo').css({width:winW, height:'auto'})
    }
};

$('.m-again').hide();

// 정지버튼
$('.pauseIcon').on({click:function(){
    if( videoPlay === 'on' ) {
        videoPlay = 'off';
        $('#mainVideo').get(0).pause();
        $(this).find('i').attr('class', 'fas fa-play');
    } else {
        $('#mainVideo').get(0).play();
        videoPlay = 'on';
        $(this).find('i').attr('class', 'fas fa-pause');
    }
}});

$(document).keypress(function(e) {

})