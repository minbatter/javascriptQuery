// $('#nav>li>div').click(function(e) {
//     e.preventDefault();
//     $('.sub').hide();
//     $(this).next().show();
// });

// $('#nav>li>div').click(function(e) {
//     e.preventDefault();
    
//     if( $(this).next().css("display") == 'none' ) {
//         $('.sub').slideUp();
//     }

//     $(this).next().slideDown();
// });

$('#nav>li>div').click(function(e) {
    e.preventDefault();

    let th=$(this).next();
    $('.sub').slideUp();
    if( th.is(':visible') ) {
        th.slideUp();
    } else {
        th.slideDown();
    }
});

// 한개일때 쓰기
// let a = true;

// $('#nav>li>div').click(function(e) {
//     e.preventDefault();
    
//     if( a ) {
//         $(this).next().slideDown();
//         a=false;
//     } else {
//         $(this).next().slideUp();
//         a=true;
//     }
// });