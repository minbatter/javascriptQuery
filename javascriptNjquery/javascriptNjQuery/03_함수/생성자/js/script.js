// {} : 객체, [] : 배열
let user = {
    name : 'ssun',
    age  : 20

}; 

// console.log(`user : ${user}`);
 console.log(user);

 function User(name, age) {
    // this => User를 가르킨다.
    // this={} 보이지는 않지만 실행하는 코드 생성자에서 - 1
    this.name = name;
    this.age  = age;
    this.sayName = function(){
        console.log(this.name);
    }
    // reture this 보이지는 않지만 실행하는 코드 생성자에서 - 2
 }

 let user1 = new User('mike1', 30);
 let user2 = new User('jane',  20);
 let user3 = new User('min',   38);
 let user4 = new User('tom',   35);

//  console.log(user1);
//  console.log(user2);
//  console.log(user3);
 console.log(user4);
 user4.sayName();

 
