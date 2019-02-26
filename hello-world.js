/**
 * 入参类型约束：方法内使用类型约束
 * @param name
 */
function sayHello(name) {
    return "Hello " + name;
}
console.log(sayHello("World"));
function userInfo(user) {
    var fullName = user.firstName + user.lastName;
    return "Hello " + fullName;
}
console.log(userInfo({ firstName: "Wang", lastName: "Haotian" }));
/**
 * 类示例
 */
var Member = /** @class */ (function () {
    function Member(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = firstName + lastName;
    }
    return Member;
}());
var user = new Member("Wang", "Haotian");
console.log(userInfo(user));
