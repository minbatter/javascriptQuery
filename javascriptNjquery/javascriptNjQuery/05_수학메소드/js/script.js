//toString()
let num=10;
num.toString();
console.log(num);

//Math.ceil() - 소숫점 올림
let num1=5.3;
let num2=5.7;

let n1 = Math.ceil(num1);
let n2 = Math.ceil(num2);

console.log(n1);
console.log(n2);

//Math.floor - 소숫점 내림
let f1 = Math.floor(num1);
let f2 = Math.floor(num2);

console.log(f1);
console.log(f2);

//Math.round() - 소숫점 반올림
let r1 = Math.round(num1);
let r2 = Math.round(num2);

console.log(r1);
console.log(r2);

let userRate = 30.1279;
// 요구사항 : 소숫점 둘째자리까지 표현(셋째자리에서 반올림)
 let a = Math.round(userRate * 100) / 100;
 console.log('a : ' + a);

// toFixed() - 소숫점 갯수의 반올림 문자를 반환함
let a1 = userRate.toFixed(3);
console.log('toFixed(3) : ' + a1);
a1 = userRate.toFixed(0);
console.log('toFixed(0) : '  + a1);
a1 = userRate.toFixed(10);
console.log('toFixed(10) : ' + a1);
console.log(typeof a1);

let b = Number(userRate.toFixed(10));
console.log('Number(userRate.toFixed(10)) : ' + b);

//isNan -문자이면 true, 숫자이면 false : not a mumber
let x = "x";
console.log(isNaN(x));
x = Number("1");
console.log(isNaN(x));

// parseInt(); 문자를 숫자로 바꿔줌
// 문자열에 숫자와 문자가 있을경우 숫자부분만 읽어서 변환(단 숫자로 시작해야됨)
let margin = '10px';
let c = parseInt(margin);
console.log(c);

let redColor = 'f3';
let d = parseInt(redColor, 16);
console.log(d);

// parseFloat() - parseInt와 비슷하지만 부동소숫점을 반환
let padding = '18.6%';
let f = parseInt(padding);
let g = parseFloat(padding);
console.log(f);
console.log(g);

// Math.random()
// 0 ~ 1사이의 값을 무작위로 생성(난수발생)
// 1 ~ 100 
let e = Math.floor(Math.random() * 46) + 1;
console.log(e);

// Math.max() - 최대값, Math.min() - 최소값, Math.abs() - 절대값, Math.sqrt(n) - n의 제곱근

let arr2 = [2, 5, 10, 50, 6];
let max = Math.max(2, 5, 10, 50, 6);
console.log(max);

let min = Math.min(2, 5, 10, 50, 6);
console.log(min);

let abs = Math.abs(-1);
console.log(abs);

let sqrt = Math.sqrt(16); //2^4
console.log(sqrt);


