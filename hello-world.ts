////参考文档：https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html

/**
 * 入参类型约束：方法内使用类型约束
 * @param name
 */
function sayHello(name:string) {
    return "Hello "+name
}

console.log(sayHello("World"));



function userInfo(user:User) {
    let fullName=user.firstName+user.lastName;
    return "Hello "+fullName
}
/**
 * 接口示例
 */
interface User {
    firstName:string
    lastName:string
}

console.log(userInfo({firstName:"Wang",lastName:"Haotian"}));

/**
 * 类示例
 */
class Member {
    fullName:string;
    constructor(public firstName,public lastName){
        this.fullName=firstName+lastName
    }
}

let user=new Member("Wang","Haotian");

console.log(userInfo(user));