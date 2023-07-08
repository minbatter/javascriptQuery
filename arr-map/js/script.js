let arr=[3,4,5,6];

// for(let i=0; i < arr.length; i++) {
//     arr[i] = arr[i]*5;
// }

// console.log(arr);

let a=arr.map(function(item) {
    console.log(item);
    return item*2;
});

console.log(a);

let userList=[
    {
        userId:"1",
        firstName:"ssun",
        lastName:"sun",
        phone:"010-8579-7523",
        address:"seoul"
    },
    {
        userId:"2",
        firstName:"soowon",
        lastName:"sun",
        phone:"010-7412-9632",
        address:"goyang"
    },
    {
        userId:"3",
        firstName:"yeowon",
        lastName:"sun",
        phone:"010-1259-7536",
        address:"school"
    }
];

// let newUserList=userList.map(u => ({
//     userId:u.userId,
//     address:u.address
// }))
// console.log(newUserList)

let newUserList=userList.map(function(user){
    return `${user.firstName}`;
});

console.log(newUserList)

