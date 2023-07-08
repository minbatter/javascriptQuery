// 1. 한줄주석

/* 2.여러줄주석 */  //  => shfit + alt + a

// 3. 변수(variable) var, let, const
// 3-1 var
var name='ssun';
//var name = document.getElementById('wrap');

console.log(name);

var name = 'park';

console.log(name)
// var 한번 선언된 변수를 다시 선언할수 있음

// 3-2 let
let name1;

console.log(name1);

name1 = 'ssss';

console.log(name1);
// let 한번 선언된 변수를 다시 선언할수 없을 대신 재선언 가능

// 3-3 const
const name2='jquery';
console.log(name2);
// const 선언과 동시에 값을 대입해야 한다. 대도록이면 변한지 않는 값을 사용할때 선언 ( 보안 때문에 )

// 4. type( primitve -[ number, string, boolean, null, undefined, symbol, value ], 
//                    [ object{} ],    
//                    [ function ] )

// 4-1 number
const count    = 17;
const size     = 17.8;
const infinity = 1/0;

// back tick에서 변수 가져오는 형싱은 => ${} ECAM6 에서 사용
console.log( `value: ${count}, type: ${typeof count}` );   // 백틱기호(템프럴 리터럴)
console.log( "value: " + size +", type: " + typeof size ); // 

// 4-2 string
const char     = 'c';
const names    = 'ssun';
const greeting = "hello" + names + 7;

console.log( `value : ${greeting}, type: ${typeof greeting}` );

// 4-3 boolean
// false : 0, "", null, undefined, NaN
// true  : None false (다른 value내용이나 값이 들어있는 것들)

const read = true;
const test = 3 < 1;

console.log(`value : ${read}, type: ${typeof read} `);
console.log(`value : ${test}, type: ${typeof test} `);

// 4-4 null
let nothing = null;
console.log(`value : ${nothing}, type: ${typeof nothing} `);

// 4-5 undefined
let x;
console.log(`value : ${x}, type: ${typeof x} `);

// 4-6 symbol - 유일한 값을 가진다.
const symbol1 = Symbol('id')
const symbol2 = Symbol('id')
// 유일한 값을 만들때 필요
console.log('symbol1 === symbol2 => : ' + (symbol1 === symbol2));

// ctrl + alt + shift + 방향키 => 열모드 가능
const gsymbol1 = Symbol.for('id')
const gsymbol2 = Symbol.for('id')
// 유일한 값을 만들때 필요
console.log('gsymbol1 === gsymbol2 => : ' + (gsymbol1 === gsymbol2));

// symbol은 바로 출력하면 오류 그래서 .description
console.log(`value : ${gsymbol1.description}, type: ${typeof gsymbol1}`);

// 5. 호이스팅 - 아래의 선언만 끌어올린다. 스코프 내부 어디서든 변수선언만은 최상위에 선언된것처럼 처리
console.log(age);
var age = '16';
console.log(age);

// 6. 스코프 var:함수 스코프  let, const: 블럭 스코프
var age1 = 30;
if( age1 > 19 ) {
    var txt = '성인';
    
}
console.log(txt);

add(1, 2);
function add(num1, num2) { 
    var result = num1 + num2;
    console.log(result);
}



