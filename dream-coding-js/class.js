'use strict';
// Object-oriendted programming
// class: template 템플릿에 속하고 템플릿을 이용해서
// object: instance of a class 실제로 데이터를 넣어서 만드는 것 -> object
// JavaScript classes
// - introduced in ES6 자바스크립트에서는 클래스가 도입된지 얼마 안됨.
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations 클래스 선언
class Person {
  // constructor 생성자
  constructor(name, age) {
    // 생성자를 이용해서 필요한 데이터를 전달한다.
    // fields 전달받은 데이터를 두가지 필드에 바로 할당해준다.
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const sunmin = new Person('sunmin', 20);
console.log(sunmin.name);
console.log(sunmin.age);
sunmin.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    // if (value < 0) {
    // throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Sunmin', 'Lee', -1);
console.log(user1.age);

// 3. Fields (public, private) 최근에 나옴
// Too soon
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
// Too soon
class Article {
  static publisher = 'Sunmin';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 상속 & 다양성
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

// 상속을 이용하면 공통되는 부분을 반복해서 작성하지 않아도 extends를 이용해서 재사용이 가능하다.
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('삼각형');
  }
  getArea() {
    // 필요한 것들만 오버라이딩해서 작성 가능
    return (this.width * this.height) / 2;
  }

  toString() {
    return `Triangle: color: ${this.color}`;
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking instanceOf
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
