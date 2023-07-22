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