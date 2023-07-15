/* 'use strict' */

console.log(this); // window

function 함수() { // strict 모드에서는 undefined
    console.log(this);
}

함수();
window.함수(); // window

let obj = {
    data:'jee',
    함수:function() {
        console.log('hi');
        console.log(this); // this는 obj 나타냄
    }
}
obj.함수();

let obj2={
    data : {
        함수: () => {
            console.log(this); // 익명함수의 this 함수밖의 상위요소 window를 나타낸다.
        }
    }
}

obj2.data.함수(); // 화살표 함수는 this값을 함수 밖에 있는것을 나타내줌

console.log('==================================================')

document.getElementById('btn').addEventListener('click', function(e) {
    console.log(this);
    console.log(e.currentTarget);
});

let obj3={
    이름:['지현','지영','쏭'],
    함수:function() {
        console.log(this); // obj3를 나타냄
        obj3.이름.forEach(function() {
            console.log(this); // 익명함수 에서는 부모의 this
        })

    }
}

obj3.함수();