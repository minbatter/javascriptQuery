function showName(name) { // 매개변수
    console.log(name);
};

showName('sooyown'); // 인자값
// arguments
// 함수로 넘오 온 모든 인수에 접근
// 함수내에서 이용 가능한 지역 변수
// Array 형태의 객체
// length / index 
// 배열 내장 메서드 없음 (map, forEach 못씀)

function showName1(...names) {
    console.log(names);
};


showName1();
showName1('mike');
showName1('mike', 'kim', 'ssun');

let arr1=[1,2,3];
let arr2=[4,5,6];
/* 
arr2.reverse().forEach((num) => {
    arr1.unshift(num);
});

console.log(arr1);
 */

let result=[...arr2, ...arr1, 7,8,9];
console.log(result);

let arr3 = [...arr1];
console.log(arr3);

console.log('===========================================================');

function User(name1, age, ...skills) {
    this.name=name1;
    this.age=age;
    this.skills=skills;
}

const user1 = new User('Mike',  30, 'html','css');
const user2 = new User('misel', 30, 'html','scss', 'photoShop');
const user3 = new User('ssun',  30, 'css', 'js', 'react', 'Vue');

console.log(user1);
console.log(user2);
console.log(user3);



