//函数
// 一个声明入参类型和返回值类型的函数
/**
 * 欢迎用户
 * @param userName
 * @param day
 */
function welcomeUser(userName, day) {
    if (day === void 0) { day = 1; }
    return "你好！" + userName + ",已登陆" + day + "天。";
}
console.log(welcomeUser("Wang"));
//范型
//枚举
//数字枚举
var Enum1;
(function (Enum1) {
    Enum1[Enum1["a"] = 1] = "a";
    Enum1[Enum1["b"] = 2] = "b";
    Enum1[Enum1["c"] = 3] = "c";
    Enum1[Enum1["d"] = 4] = "d";
})(Enum1 || (Enum1 = {}));
console.log(Enum1.d); //4
var x = {
    name: 'abc'
};
console.log(x);
// y's inferred type is { name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
//x = y;
y = x;
console.log(x); //不会报错且输出为{ name: 'Alice', location: 'Seattle' }
