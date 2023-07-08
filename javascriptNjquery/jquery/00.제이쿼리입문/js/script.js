$(function() {
    $('h1').css('color', 'red');
    $('h2').css({background:'yellow', color:'red'})
    $('#box').css({width:'500px', height:'auto', margin:'10px auto', background:'#ddd', padding:'20px'})

    $('p').hover(function(){
        $(this).css('color', 'green')
    }, function(){
        $(this).css('color', 'red')
    })
});