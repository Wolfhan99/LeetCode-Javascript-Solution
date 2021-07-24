## **JavaScript继承的六种方式：**
***

1. 原型链继承
>   核心：将父类的实例作为子类的原型，缺点是在包含有引用数据时，会被所有的实例对象所共享，容易造成
>  修改的混乱，还有就是在创建子类型时不能向超类型传递参数
  
```javascript
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
```

---

2. 构造函数继承
  
  
> 这种方式使用借用构造函数的方式，这种方式通过在子类型的函数中调用超类型的构造函数实现的，
> 这一方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，
> 并且超类型原型定义的方法子类型也没有办法访问到
 
```javascript
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
```
---

3. 组合继承
   
> 组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用原型链和构造函数组合起来使用
> 的一种方式。借用构造函数的方式来实现类型属性的继承，借用将子类型原型设定为超类型实例来实现
> 方法的继承。 这种方法融合了1，2的优点，但是调用了两次超类的构造函数，造成了子类型中多了很多
> 不必要的属性。

    优点： 
    1. 父类的方法可以被复用 
    2. 父类的引用属性不会被共享
    3. 子类构建实例时可以向父类传递参数

    缺点：
    1. 调用了两次父类的构造函数，第一次给子类的原型添加了name,color等属性
    2. 第二次又给子类的构造函数添加了name, color等属性，从而覆盖了子类原型中的同名参数。        
    3. 这种被覆盖的情况造成了性能上的浪费


```javascript
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
```
---

4. 原型式继承
   
> 原型式继承的主要思路是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5 中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同。

> 核心：原型式继承的object方法本质上是对参数对象的一个浅复制
> 
>优点： 父类方法可以复用 
>
>缺点： 父类的引用属性会被所有子类实例共享， 子类构建实例时不能向父类传递参数


```javascript
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
```

---

5. 寄生式继承

> 寄生式继承 核心：使用原型式继承获得一个目标对象的浅复制，然后增强这个浅复制的能力,仅提供一种思路， 没什么优缺点
  
```javascript
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
```
---


6. 寄生组合式继承

> 组合继承有一个会调用两次父类构造函数造成浪费的缺点，寄生组合继承就可以解决这个问题。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性。
  
 
```javascript
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
```

7. ES6 Class Extends

> 核心:
> ES6的继承的结果和寄生组合继承相似，本质上，ES6继承是一种语法糖
