// let names:string | undefined ;

// function throwError(msg:string):never{
//     throw new Error(msg);
//     // 下面这个代码是永远不会被访问到的
//     console.log(111)
// }

// let user:{
//     name:string,
//     age:number
// };
// user = {
//     name:"gumei",
//     age:17
// }


// 数组只能有两项，第一项是字符串，第二项是数字，这就是元祖
// let arr :[string,number];

// let str:any = "sjfkdjkfj";
// let num:number = str;

// // type 类型名称 =　类型约束
// type Sex = "男"|"女"
// type User = {
//     name:string,
//     age:number,
//     sex:Sex
// }
// let u:User;
// u = {
//     name:"gumei",
//     age:17,
//     sex:"男"
// }
// // 返回数组的每一项为Ｕser类型
// function getUser():User[]{
//     return [{
//         name:"fff",
//         age:2,
//         sex:"女"
//     }]
// }


// interface User {
//     name:string,
//     age:number,
//     sayHello:()=>void,
//     getName:()=>string
// }
// let u:User = {
//     name:'dff',
//     age:12,
//     sayHello(){
//         console.log("hello,ts-interface")
//     },
//     getName(){
//         return this.name
//     }
// }

// type A =  {
//     T1:string
// }
// type B = {
//     T2:number
// } & A
// let u:B = {
//     T1:"fff",
//     T2:7
// }

// // readonly修饰副
// interface User{
//     readonly  id:string,
//     name:string,
//     age:number
// }
// let u:User={
//     id:"123",
//     name:"gumei",
//     age:12
// }
// // 下面这个值就不能更改了
// // u.id = "3444"

// readonly修饰的是数组，表示数组是一个只读的数组，不能使用push,pop函数等
// 凡是涉及到改变原数组的是不行的
// let arr:readonly number[] = [3,4,5];

