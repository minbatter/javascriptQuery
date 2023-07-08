let a='age';

const user = {
    name1 : 'jee',
    [a]   : 30, // 계산된 프로퍼티
    [5+2] : 7,
    ["안녕" + "하세요"] : 'Hello'
}
console.log(user);

//const user1 = user;
const newUser = Object.assign({name1 :'ssss'}, user);

//user1.name1 = 'ssun';
//객체 복제
//newUser.name1='hyun';

//console.log(user.name1);
console.log(newUser.name1);
// console.log(user);
console.log(newUser);

//================================================================================
// Key 배열 반환 Object.keys()
const user2 = {
    name2 : 'parkkkkkk',
    age : 30,
    gender : 'female'
}

const keys = Object.keys(user2);
console.log(keys);

// 값 배열 변환 Object.values();
const values = Object.values(user2);
console.log(values);

//키/값 배열 반환 Object.entries()
const user3 = {
    name3 : 'parkkkkkk',
    age : 30,
    gender : 'female'
}

const ents = Object.entries(user3);
for(let i=0; i < ents.length; i++ ) {
    console.log('ent [' + ents[i] + ']');
    //let arrs =  ents[i].split(',');
    console.log('key : ' + ents[i][0] + ' Value : ' + ents[i][1] );
}

// 키 / 값이 배열로 되었는것을 객체로 변환 Object.fromEntries()
const arr = [
    ['name3', 'ssuns'],
    ['age',    42],
    ['gender', 'female']
]

const obj = Object.fromEntries(arr);
console.log(obj);