// 1. 문자결합 (string concatenation)
console.log('my' + 'ssun');
console.log('my' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// ctrl + z / ctrl + shift + z : Undo/Redo
console.log('jisung\'s room');
console.log("jisung's \n room");
console.log("jisung's \t room"); // \특수문자 \n 줄바꿈 \t 탭 - escape

// 2. 숫자연사자 ( numberic operators)
console.log(1+1);

// 3.증감연산자
let cnt = 2;
let preincrement = cnt++;
console.log(preincrement);
preincrement = cnt;
console.log(preincrement);

const predecrement = --cnt;
console.log(predecrement);

// 4. 할당연산자
let x = 3;
let y = 6;

// x = x+y;
x += y;
console.log('[x] = ' + x);
x -= y;
console.log('[x] = ' + x);
x *= y;
console.log('[x] = ' + x);
x /= y;
console.log('[x] = ' + x);
x %= y;
console.log('[x] = ' + x);

// 5. 비교연산자
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. or(||) and(&&) not(!) 논리연산자
const value1 = false;
const value2 = 4<2;
const value3 = 5>2;

function check() {
    for( let i=0; i < 10; i++ ) {
        console.log('오늘 수업 끝나감');
    }

    return true;
}

console.log(`or : ${ value1 || value2 || check() }`);

/* var a = true;

if( cnt == 0 ) {
    console.log('hi');
    a = !a;
} else {
    console.log('bye');
    a = !a;
}

console.log(cnt);
 */
console.log(`and : ${ check() || value2 || value1 }`);
console.log(!value1);

// 7. 같다(Equality)
const stringFive = '5';
const numberFive =  5 ;

console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

const hyun1 = {name:'ssun'};
const hyun2 = {name:'ssun'};
const hyun3 = hyun1;

console.log( hyun1 ==  hyun2 ); // false
console.log( hyun1 === hyun2 ); // false
console.log( hyun1 === hyun3 ); // true

console.log( 0 ==  false ); // true
console.log( 0 === false ); // false 0은 boolean type이 아니라서 false

console.log( '' ==   false ); // true
console.log( '' ===  false ); // false ''은 boolean type이 아니라서 false

console.log(null ==  undefined);  // true
console.log(null === undefined); // false

// 8. if문 if(){}else{} elseif{}
const name3 = 'ssun';

if( name3 === 'ssun1' ) {
    console.log(`Welcome ${name3}`);
    //console.log('Welcome ' + name3);
} else {
    console.log(`오마이 갓김치`);
}

const name4 = 'ssun';
console.log(name4 === 'ssun' ? "어예" : "갓김치");

const browser = 'IE';

switch( browser ) {
    case 'IE' :
        console.log('인터넷 익스플로러');
        break;
    case 'Chrome' :
        console.log('크롬 브라우저')
        break;
    case 'firefox' :
        console.log('파이어폭스 브라우저')
        break;
    default:
        console.log('브랜드 없음');
        break;
}

/* 
let a = prompt('나이','20');
console.log(a);
*/

/* 
let gender = prompt('성별 남성 : M , 여성 : F');
let age    = prompt('나이', '');

if( gender == 'F' && age > 20 && age < 30 ) {
    console.log(true);
} else {
    console.log(false);
}
*/

/* 
let gender = prompt('성별 남성 : M , 여성 : F', '여성');
let age    = prompt('나이는 어떻게 되세요', '20');
let result = age>=20 && age<30 && gender=='여성';

console.log(result);
*/

/* 
let kor  = Number(prompt('국어', '0'));
let eng  = prompt('영어', '0');
let math = prompt('수학', '0');

let avg = (kor + parseInt(eng) + parseInt(math)) / 3;
console.log('[ AVG ] ' + avg);

let result = avg >= 70 && kor >= 60 && eng >= 60 && math >= 60;

console.log(result);
*/

/* 
const bus   = Number(prompt('교통비를 입력하세요', '3000'));
const food  = Number(prompt('식비를 입력하세요',   '7000'));
const drink = Number(prompt('음료비를 입력하세요', '2000')); 
*/
const bus   = 3000;
const food  = 7000;
const drink = 2000;

let total = bus + food + drink;

let resultMessage = total > 10000 ? `${total-10000}원 초과` : "돈 관리 참 잘했어요";

console.log(resultMessage);
document.write(resultMessage);

// 9. 반복문
// 9-1 while
let i=3;
let j=3;

while( i > 0 ) {
    console.log(`while: ${i}`);
    i--;
}

// 9-2 do while
do {
    console.log(`while: ${j}`);
    j--;
} while( j > 0)

// 9-3 for
for( let k=0; k < 10; k++ ) {
    if( k > 8 ) break;

    console.log(k);
}








