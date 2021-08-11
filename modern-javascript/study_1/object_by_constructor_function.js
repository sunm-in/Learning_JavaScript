// 🔍 생성자 함수에 의한 객체 생성
{
  /**
   * 🔍 1. Object 생성자 함수
   * new 연산자와 함꼐 Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
   * 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.
   */
  // 빈 객체의 생성
  const person = new Object();

  // 프로퍼티 추가
  person.name = 'Lee';
  person.sayHello = function () {
    console.log('Hi~ My name is ' + this.name);
  };

  console.log(person); // { name: 'Lee', sayHello: [Function (anonymous)] }
  person.sayHello(); // Hi~ My name is Lee

  /**
   * 생성자 함수(constructor)란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
   * 생성자 함수에 의해 생선된 객체를 인스턴스(instance)라 한다.
   */

  // 🔍 2. 생성자 함수
  /**
   * 2-1 객체 리터럴에 의한 객체 생성 방식의 문제점
   * 객체 리터럴에 의한 생성 방식은 직관적이고 간편하다. 하지만 객체 리터럴에 의한 객체 생성 방식은 단 하나의 객체만 생성한다.
   * 따라서 동일한 프로퍼티를 갖는 객체를 여러 개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야 하기 때문에 비효율적이다.
   */
  const circle1 = {
    radius: 5,
    getDiameter() {
      return 2 * this.radius;
    },
  };

  console.log(circle1.getDiameter()); // 10

  const circle2 = {
    radius: 10,
    getDiameter() {
      return 2 * this.radius;
    },
  };

  console.log(circle2.getDiameter()); // 20
}

{
  /**
   * 객체를 프로퍼티를 통해 객체 고유의 상태를 표현한다.
   * 메서드를 통해 상태 데이터인 프로퍼티를 참조하고 조작하는 동작을 표현한다.
   */

  /**
   * 2-2 생성자 함수에 의한 객체 생성 방식의 장점
   * 생성자 함수에 의한 객체 생성 방식은 마치 객체(인스턴스)를 생성하기 위한 템플릿(클래스)처럼
   * 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러 개를 간편하게 생성할 수 있다.
   */
  // 생성자 함수
  function Circle(radius) {
    // 생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  // 인스턴스의 생성
  const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
  const circle2 = new Circle(10); // 반지름이 10인 Circle 객체를 생성

  console.log(circle1.getDiameter()); // 10
  console.log(circle2.getDiameter()); // 20
}

{
  /**
   * 2-3 생성자 함수의 인스턴스 생성 과정
   * 생성자 함수의 역할 -> 인스턴스를 생성하는 것과 생성된 인스턴스를 초기화(인스턴스 프로퍼티 추가 및 초기값 할당)하는 것이다.
   */
  // 생성자 함수
  function Circle(radius) {
    // 인스턴스 초기화
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  // 인스턴스 생성
  const circle1 = new Circle(5); // 반지름이 5인 Circle 객체를 생성
}

{
  /**
   * 자바스크립트는 암묵적인 처리를 통해 인스턴스를 생성하고 반환한다. new 연산자와 함께 생성자 함수를 호출하면
   * 자바스크립트 엔진은 다음과 같은 과정을 거쳐 암묵적으로 인스턴스를 생성하고 인스턴스를 초기화한 후 암묵적으로 인스턴스를 반환한다.
   */
  // 🔍 1. 인스턴스 생성과 this 바인딩
  // 바인딩 -> 식별자와 값을 연결하는 과정을 의미. 예를 들어, 변수 선언은 변수 이름(식별자)과 확보된 메모리 공간의 주소를 바인딩하는 것이다.
  // this 바인딩은 this(키워드로 분류되지만 식별자 역할을 한다)와 this가 가리킬 객체를 바인딩하는 것이다.
  function Cricle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this 바인딩된다.
    console.log(this); // Circle {}

    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  // 2. 인스턴스 초기화
  // this에 바인딩되어 있는 인스턴스에 프로퍼티나 메서드를 추가하고 생성자 함수가 인수로 전달받은
  // 초기값을 인스턴스 프로퍼티에 할당하여 초기화하거나 고정값을 할당한다.
  function Cricle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }

  // 3. 인스턴스 반환
  // 생성자 함수 내부의 모든 처리가 끝나면 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  function Cricle(radius) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.

    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다.
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다.
  }
  // 인스턴스 생성. Circle 생성자 함수는 암묵적으로 this를 반환한다.
  // const Circle = new Circle(1);
  // console.log(circle); // Circle {radius: 1, getDiameter: f}
}
console.clear();
// 210809
{
  // 🔍 내부 메서드 [[Call]]과 [[Construct]]
  /**
   * 함수 선언문 또는 함수 표현식으로 정의한 함수는 일반적인 함수로서 호출할 수 있는 것은 물론 생성자 함수로서 호출할 수 있다.
   * 생성자 함수로서 호출한다는 것은 new 연산자와 함께 호출하여 객체를 생성하는 것을 의미한다.
   */
  // 함수는 객체다.
  function foo() {}

  // 함수는 객체이므로 프로퍼티를 소유할 수 있다.
  foo.prop = 10;

  // 함수는 객체이므로 메서드를 소유할 수 있다.
  foo.method = function () {
    console.log(this.prop);
  };
  foo.method(); // 10

  // ✅
  // 일반 객체는 호출할 수 없지만 함수는 호출할 수 있다.
  function foo() {}

  // 일반적인 함수로서 호출: [[Call]]이 호출된다.
  foo();

  // 생성자 함수로서 호출: [[Construct]]가 호출된다.
  new foo();
}

{
  /**
   * 🔍 new 연산자
   * new 연산자와 함께 함수를 호출하면 해당 함수는 생성자 함수로 동작한다.
   */
  // 생성자 함수로서 정의하지 않은 일반 함수
  function add(x, y) {
    return x + y;
  }

  // 생성자 함수로서 정의하지 않은 일반 함수를 new 연산자와 함께 호출
  let inst = new add();

  // 함수가 객체를 반환하지 않았으므로 반환문이 무시된다. 따라서 빈 객체가 생성되어 반환한다.
  console.log(inst); // {}

  // 객체를 반환하는 일반 함수
  function createUser(name, role) {
    return { name, role };
  }

  // 일반 함수를 new 연산자와 함께 호출
  inst = new createUser('Lee', 'admin');
  // 함수가 생성한 객체를 반환한다.
  console.log(inst); // { name: 'Lee', role: 'admin' }
}

{
  /**
   * 🔍 new.target
   * new 연산자와 함께 생성자 함수로서 호출되면 함수 내부의 new.target은 함수 자신을 가리킨다.
   * new 연산자없이 일반 함수로서 호출된 함수 내부의 new.target은 undefined다.
   */
  // 생성자 함수
  function Circle(radius) {
    // 이 함수가 new 연산자와 함께 호출되지 않았다면 new.target은 undefined다.
    if (!new.target) {
      // new 연산자와 함께 생성자 함수를 재귀 호출하여 생성된 인스턴스를 반환한다.
      return new Circle(radius);
    }
    this.radius = radius;
    this.getDiameter = function () {
      return 2 * this.radius;
    };
  }
  // new 연산자 없이 생성자 함수를 호출하여도 new.target을 통해 생성자 함수로서 호출된다.
  const circle = Circle(5);
  console.log(circle.getDiameter());
}
