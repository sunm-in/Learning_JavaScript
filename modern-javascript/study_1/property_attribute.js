// 프로퍼티 어트리뷰트
{
  /**
   * 🔍 1. 내부 슬롯과 내부 메서드
   * 내부 슬롯과 메서드는 자바스크립트 엔진의 구현 알고리즘을 설명하기 위해 ECMAScript 사양에서 사용하는
   * 의사 프로퍼티(pseudo property)와 의사 메서드(pseudo method)다.
   * ECMAScript 사양에 등장하는 이중 대괄호 ([[ ... ]])로 감싼 이름들이 내부 슬롯과 내부 메서드다.
   */
  const o = {};

  // 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
  // o.[[Prototype]] // -> Uncaught SyntaxError: Unexpected token '['
  // 단, 일부 내부 슬롯과 내부 메서드에 한하여 간접적으로 접근할 수 있는 수단을 제공하기는 한다.
  // o.__proto__ // -> Object.prototype
}

{
  // 🔍 2. 프로퍼티 어트리뷰트와 프로퍼티 디스크립터 객체
  /**
   * 자바스크립트 엔진은 프로퍼티를 생성할 때 프로퍼티의 상태를 나타내는 프로퍼티 어트리뷰트를 기본값으로 자동 정의한다.
   * 프로퍼티의 상태란 프로퍼티의 값(value), 값의 갱신 가능 여부(writable), 열거 가능 여부(enumerable), 재정의 가능 여부(configurable)를 말한다.
   */
}

{
  // 🔍 3. 데이터 프로퍼티와 접근자 프로퍼티
  // 프로퍼티는 데이터 프로퍼티와 접근자 프로퍼티로 구분할 수 있다.
  // 데이터 프로퍼티(data property)     -> 키와 값으로 구성된 일반적인 프로퍼티다.
  // 접근자 프로퍼티(accessor property) -> 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 호출되는 접근자 함수(accessor function)로 구성된 프로퍼티다.

  /**
   * 3-1 데이터 프로퍼티
   * 프로퍼티 어트리뷰트는 자바스크립트 엔진이 프로퍼티를 생성할 때 기본값으로 자동 정의된다.
   *
   * 프로퍼티 어트리뷰트: [[Value]], 프로퍼티 디스크립터 객체의 프로퍼티: value
   * - 프로퍼티 키를 통해 프로퍼티 값에 접근하면 반환되는 값이다.
   * - 프로퍼티 키를 통해 프로퍼티 값을 변경하면 [[Value]]에 값을 재할당한다. 이때 프로퍼티가 없으면 프로퍼티를 동적 생성하고 생성된 프로퍼티의 [[Value]]에 값을 저장한다.
   *
   * [[Writable]], writable
   * - 프로퍼티 값의 변경 가능 여부를 나타내며 불리언 값을 갖는다.
   * - [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없는 읽기 전용 프로퍼티가 된다.
   *
   * [[Enumerable]], enumerable
   * - 프로퍼티의 열거 기능 여부를 나타내며 불리언 값을 갖는다.
   * - [[Enumerable]]의 값이 false인 경우 해당 프로퍼티는 for ... in 문이나 Object.keys 메서드 등으로 열거할 수 없다.
   *
   * [[Configurable]], configurable
   * - 프로퍼티의 재정의 가능 여부를 나타내며 불리언 값을 갖는다.
   * - [[Configurable]]의 값이 false인 경우 해당 프로퍼티의 삭제, 프로퍼티 어트리뷰트 값의 변경이 금지된다.
   * 단, [[Writable]]이 true인 경우 [[Value]]의 변경과 [[Writable]]을 false로 변경하는 것은 허용된다.
   */
  const person = {
    name: 'Lee',
  };

  // 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 취득한다.
  console.log(Object.getOwnPropertyDescriptor(person, 'name')); // { value: 'Lee', writable: true, enumerable: true, configurable: true }

  // 프로퍼티 동적 생성
  person.age = 20;
  console.log(Object.getOwnPropertyDescriptors(person));
  // name: {value: 'Lee', writable: true, enumerable: true, configurable: true }
  // age: { value: 20, writable: true, enumerable: true, configurable: true }
}

{
  /**
   * 3-2 접근자 프로퍼티
   * 자체적으로는 값을 갖지 않고 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티
   *
   * 프로퍼티 어트리뷰트: [[Get]], 프로퍼티 디스크립터 객체의 프로퍼티: get
   * - 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 읽을 때 호출되는 접근자 함수다.
   * 즉, 접근자 프로퍼티 키로 값에 접근하면 프로퍼티 어트리뷰트 [[Get]]의 값, 즉 getter 함수가 호출되고 그 결과가 프로퍼티 값으로 반환된다.
   *
   * [[Set]], set
   * - 접근자 프로퍼티를 통해 데이터 프로퍼티의 값을 저장할 때 호출되는 접근자 함수.
   * 즉, 접근자 프로퍼티 키로 프로퍼티 값을 저장하면 프로퍼티 어트리뷰트 [[Set]]. 즉 setter 함수가 호출되고 그 결과가 프로퍼티 값으로 저장된다.
   *
   * [[Enumerable]], enumerable
   * - 데이터 프로퍼티의 [[Enumerable]]과 같다.
   *
   * [[Configurable]], configurable
   * - 데이터 프로퍼티의 [[Configurable]]과 같다.
   */
  const person = {
    // 데이터 프로퍼티
    firstName: 'Sunmin',
    lastName: 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
    // getter 함수
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    // setter 함수
    set fullName(name) {
      // 배열 디스트럭처링 할당
      [this.firstName, this.lastName] = name.split(' ');
    },
  };

  // 데이터 프로퍼티를 통한 프로퍼티 값의 참조
  console.log(person.firstName + ' ' + person.lastName); // Sunmin Lee

  // 접근자 프로퍼티를 통한 프로퍼티 값의 저장
  person.fullName = 'Sunmin Lee';
  console.log(person); // { firstName: 'Sunmin', lastName: 'Lee' }

  // 접근자 프로퍼티를 통한 프로퍼티 값의 참조
  // 접근자 프로퍼티 fullName에 접근하면 getter 함수가 호출된다.
  console.log(person.fullName); // Sunmin Lee

  // firstName은 데이터 프로퍼티다.
  // 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
  let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
  console.log(descriptor); // {value: 'Sunmin', writable: true, enumerable: true, configurable: true}

  // fullName은 접근자 프로퍼티다.
  // 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]] 프로퍼티 어트리뷰트를 갖는다.
  descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
  console.log(descriptor); // {get: [Function: get fullName], set: [Function: set fullName], enumerable: true, configurable: true}
}

{
  /**
   * 프로토타입(prototype)
   * 프로토타입은 어떤 객체의 상위(부모) 객체의 역할을 하는 객체다. 프로토타입은 하위(자식) 객체에게 자신의 프로퍼티와 메서드를 상속한다.
   * 프로토타입 체인은 프로토타입이 단방향 링크드 리스트 형태로 연결되어 있는 상속 구조를 말한다.
   * 객체의 프로퍼티나 메서드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메서드가 없다면
   * 프로토타입 체인을 따라 프로토타입의 프로퍼티나 메서드를 차례대로 검색한다.
   */
}
