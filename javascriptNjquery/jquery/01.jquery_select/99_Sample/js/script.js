
/* $('#stick').animate({top: 700}, 500).animate({top: 630}, 500);

$('#ball00').delay(900).animate({top: 250}, 1000);


$('#ball01').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball02').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball03').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball04').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball05').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball06').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball07').delay(1900).animate({top: 250, left: 100}, 1000);
$('#ball08').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball09').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball10').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball11').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball12').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball13').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball14').delay(1900).animate({top: 250, right: 100}, 1000);
$('#ball15').delay(1900).animate({top: 250, right: 100}, 1000);

 */
$(() => {
    function rndInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    $("#stick").animate({
        top: 720
    }, 1000).animate({
        top: 600
    }, 300);
    $("#ball00").delay(1130).animate({
        top: 260
    }, 400)



    $("#ball01").delay(1500).animate({
        top: rndInt(250, 270),
        left: rndInt(310, 350)
    }, 300)



    $("#ball02").delay(1500).animate({
        top: rndInt(220, 280),
        left: rndInt(110, 170)
    }, 300)

    $("#ball03").delay(1500).animate({
        top: rndInt(230, 270),
        left: rndInt(360, 400)
    }, 300)



    $("#ball04").delay(1500).animate({
        top: rndInt(180, 220),
        left: rndInt(80, 120)
    }, 300)

    $("#ball08").delay(1500).animate({
        top: rndInt(120, 180),
        left: rndInt(225, 275)
    }, 300)

    $("#ball06").delay(1500).animate({
        top: rndInt(140, 200),
        left: rndInt(320, 370)
    }, 300)



    $("#ball07").delay(1500).animate({
        top: rndInt(80, 120),
        left: rndInt(50, 100)
    }, 300)

    $("#ball05").delay(1500).animate({
        top: rndInt(60, 100),
        left: rndInt(125, 180)
    }, 300)

    $("#ball09").delay(1500).animate({
        top: rndInt(60, 100),
        left: rndInt(300, 360)
    }, 300)
    $("#ball10").delay(1500).animate({
        top: rndInt(80, 120),
        left: rndInt(400, 450)
    }, 300)



    $("#ball11").delay(1500).animate({
        top: rndInt(40, 80),
        left: rndInt(0, 80)
    }, 300)
    $("#ball12").delay(1500).animate({
        top: rndInt(20, 50),
        left: rndInt(100, 180)
    }, 300)
    $("#ball13").delay(1500).animate({
        top: rndInt(0, 50),
        left: rndInt(200, 280)
    }, 300)
    $("#ball14").delay(1500).animate({
        top: rndInt(20, 50),
        left: rndInt(300, 380)
    }, 300)
    $("#ball15").delay(1500).animate({
        top: rndInt(40, 80),
        left: rndInt(400, 480)
    }, 300)
})