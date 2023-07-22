const appbar=$('.app-bar-wrap .appbarBt');
const mobileMenu=$('.mobile-menu');

appbar.on('click', function(){
    mobileMenu.stop().animate({left:0}, 500);
    $('.header-mobile-menu').stop().animate({left:'100%'}, 500);
})