//函数
// 一个声明入参类型和返回值类型的函数

/**
 * 欢迎用户
 * @param userName
 * @param day
 */
function welcomeUser(userName:string,day:number=1) :string{
    return "你好！"+userName+",已登陆"+day+"天。"
}

console.log(welcomeUser("Wang"));

//范型

//枚举
//数字枚举
enum Enum1 {
    a=1,b,c,d
}

console.log(Enum1.d);//4


//类型推论
interface Named {
    name: string;
}

let x: Named= {
    name: 'abc'
};
console.log(x);
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
x = y;
console.log(x);//不会报错且输出为{ name: 'Alice', location: 'Seattle' },y=x是错误的， Property 'location' is missing in type 'Named' but required in type '{ name: string; location: string; }'.

