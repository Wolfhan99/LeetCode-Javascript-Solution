// 1. 原型链继承 核心：将父类的实例作为子类的原型
/* 

function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
}

function SubType() {
  this.subproperty = false;
}

// 继承SuperType 核心：
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
  return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());

 */

/* 

2. 构造函数继承 核心：将父类构造函数的内容赋值给子类的构造函数。
这是所有继承中唯一一个不涉及到prototype的继承 

*/
/* 

function SuperType(name) {
  this.name = name;
  // this.name = 'dad'
}

function SubType() {
  SuperType.call(this, "mom");
  this.age = 29;
  // this.name = "son"
}

var instance = new SubType();
console.log(instance.name);
console.log(instance.age); 


*/

/* 
**  3. 组合继承 核心：原型式继承和构造函数继承的组合，具备两者的优点

    优点： 1. 父类的方法可以被复用 
          2. 父类的引用属性不会被共享
          3. 子类构建实例时可以向父类传递参数

    缺点：
          调用了两次父类的构造函数，第一次给子类的原型添加了name,color等属性
          第二次又给子类的构造函数添加了name, color等属性，从而覆盖了子类原型中的同名参数。
          这种被覆盖的情况造成了性能上的浪费
*/

function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
};

function SubType(name, age) {
  // 继承属性
  SuperType.call(this, name);
  this.age = age;
}

//继承方法
SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function () {
  console.log(this.age);
}

var instance1 = new SubType('nathan', 24);
instance1.colors.push('black');
console.log(instance1.colors);
instance1.sayAge();
instance1.sayName();

var instance2 = new SubType('gang', 27);
console.log(instance2.colors);
instance2.sayAge();
instance2.sayName();

// 4. 原型式继承  核心：原型式继承的object方法本质上是对参数对象的一个浅复制
/* 
    优点： 父类方法可以复用
    缺点： 父类的引用属性会被所有子类实例共享， 子类构建实例时不能向父类传递参数
*/


var person = {
  name:'Nicholas',
  friends:['Shelby', 'Court', 'Van']
}

var anotherPerson = Object.create(person);
anotherPerson.name = 'Greg';
anotherPerson.friends.push('Robert');

var yetAnotherPerson = Object.create(person);
yetAnotherPerson.name = 'Linda';
yetAnotherPerson.friends.push('Nathan');

console.log(person.friends);


// 5.寄生式继承 核心：使用原型式继承获得一个目标对象的浅复制，然后增强这个浅复制的能力
//  仅提供一种思路， 没什么优缺点
function createAnother(original) {
  var clone = object(original);
  clone.sayHi = function() {
    console.log('hi');
  };
  return clone;
}

var person = {
  name:'Nicholas',
  friends:['Shelby', 'Court', 'Van']
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();

// 6.寄生组合继承
// 组合继承有一个会调用两次父类构造函数造成浪费的缺点，寄生组合继承就可以解决这个问题。
function inheritPrototype(subType, superType){
  var prototype = object(superType.prototype);// 创建了父类原型的浅复制
  prototype.constructor = subType; // 修正原型的构造函数
  subType.prototype = prototype; // 将子类的原型替换为这个原型
}

function SuperType(name) {
  this.name = name;
  this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function () {
  console.log(this.name);
}

function SubType(name, age){
  SuperType.call(this, name);
  this.age = age;
}
// 核心： 因为是对父类原型的复制，所以不包含父类的构造函数，
// 也就不会调动两次父类的构造函数造成浪费

inheritPrototype(subType, SuperType);
SubType.prototype.sayAge = function (){
  console.log(this.age);
}

