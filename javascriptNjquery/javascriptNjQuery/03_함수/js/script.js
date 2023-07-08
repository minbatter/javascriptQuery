love(); // 함수 호이스팅

function love() {
    for(let i=1; i<=10; i++) {
        document.write('이랑해' + i, '<br>');
    }
}

love();

// 함수 표현식
// 익명함수
//love1(); // 호이스팅이 일어나지 않는다(익명함수)

const love1 = function() {
    for(let i=1; i<=10; i++) {
        document.write('공부해' + i, '<br>');
    }
}

love1(); //실행함 아래에서 CALL을 해야됨(익명함수)

//기명함수 표현
let q = function square(w) {
    return w*w;
}

console.log(`Q = [ ${q} ]`);           // 함수명 그대로 나옴
console.log(`Q = [ ${q(2)} ]`);
//console.log(square(2)); // 기명함수 실행않됨
// 기명함수 사용의 장점은 에러 발생시 함수명을 포함해서 에러 메시지 출력이 되어 빨리 찾을수 있다.

let x = function(y, k) {
    return y+k;
}

console.log(`X = [ ${x(4, 5)} ]`);
console.log(`X = [ ${x(8, 1)} ]`);

//즉시 실행함수
(function square1(u) {
    console.log(`U * U : [${u*u}]`);
    console.log(u*u);
})(6);

// arrow 함수 
const print = function() {
    console.log('화살표 함수로 나타내줘');
}
print();

const arrprint = () => console.log('화살표 함수로 표현');
arrprint();

const add = function(a,b) {
    console.log(` Arg Count : ${arguments.length}`);
    return console.log(`A * B = ${a*b}`);
};

add(5, 7);

// 한줄이면 중괄호 필요 없음, 
// 한줄이면 return이 없어도 됨
const arradd = (a,b) => console.log(`A * B = ${a*b}`); 
arradd(5, 8);