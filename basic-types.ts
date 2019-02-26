//基础类型

//字符串
let username:string ="Wang";

//使用模版字符串，这里需要注意外层是反引号`
console.log(`Hello ${username}`);


//数组：两种定义方式，最后编译成的js是相同的
let arr1:string[]=['a','b'];
let arr2:Array<string>=['a','b'];


//元组：元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同，数组的长度没有限制
let tuple1:[string,number];
tuple1=["a",1];
tuple1.push(2);
console.log(tuple1[1]);


//枚举
enum Colors {
    red,green,black
}
console.log(Colors[1]);


//Any:可以是任何类型
let any1:any;
any1=1;
console.log(any1);
any1=true;
console.log(any1);

// Any与Object的区别是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：
let notSure: any = 4;
//notSure.ifItExists(); // 编译时不报错，单确实没有这个方法，所以运行时会报错
notSure.toFixed();// 如果notSure为字符串，则编译时不报错，运行时报错；如果notSure为数值，则运行时也不报错
console.log(notSure);

let prettySure: Object = 4;
//prettySure.toFixed();//不可以编译，直接报错


//Void:常在方法返回时使用
function consoleTip(msg):void {
        console.log(msg)
}


//类型断言:变量已知类型时，确定这个类型时什么
//类型断言有两种形式。 其一是“尖括号”语法：

let someValue1: any = "this is a string";

let strLength1: number = (<string>someValue1).length;
//另一个为as语法：

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

//其他类型：Object,Never,Null,Undefined