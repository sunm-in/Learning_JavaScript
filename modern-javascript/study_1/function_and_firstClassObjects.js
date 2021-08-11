// 🔍 함수와 일급 객체
{
  /**
   * 👀 일급 객체
   * 1. 무명의 리터럴로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
   * 2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
   * 3. 함수의 매개변수에 전달할 수 있다.
   * 4. 함수의 반환값으로 사용할 수 있다.
   */
  // 1. 함수는 무명의 리터럴로 생성할 수 있다.
  // 2. 함수는 변수에 저장할 수 있다.
  // 런타임(할당 단계)에 함수 리터럴이 평가되어 함수 객체가 생성되고 변수에 할당된다.
  const increase = function (num) {
    return ++num;
  };

  const decrease = function (num) {
    return --num;
  };

  // 2. 함수는 객체에 저장할 수 있다.
  const predicates = { increase, decrease };
  // 3. 함수의 매개변수에 전달할 수 있다.
  // 4. 함수의 반환값으로 사용할 수 있다.
  function makeCounter(predicate) {
    let num = 0;

    return function () {
      num = predicate(num);
      return num;
    };
  }

  // 3. 함수는 매개변수에게 함수를 전달할 수 있다.
  const increaser = makeCounter(predicates.increase);
  console.log(increaser()); // 1
  console.log(increaser()); // 2

  // 3. 함수는 매개변수에게 함수를 전달할 수 있다.
  const decreaser = makeCounter(predicates.decrease);
  console.log(decreaser()); // -1
  console.log(decreaser()); // -2
}

{
  /**
   * 👀 함수 객체의 프로퍼티
   * 함수는 객체다. 따라서 함수도 프로퍼티를 가질 수 있다.
   */
  function square(number) {
    return number * number;
  }
  console.dir(square);
  /**
   * 1. arguments 프로퍼티
   * 함수 객체의 arguments 프로퍼티 값은 arguments 객체다. arguments 객체는 함수 호출 시 전달된 인수들의 정보를
   * 담고 있는 순회 가능한 유사 배열 객체이며, 함수 내부에서 지역 변수처럼 사용된다. 즉, 함수 외부에서는 참조할 수 없다.
   * arguments 갹체는 매개변수 개수를 확정할 수 없는 가변 인자 함수를 구현할 때 유용하다. ✅
   *
   * 2. caller 프로퍼티
   * ECMAScript 사양에 포함되지 않은 비표준 프로퍼티다. 이후 표준화될 예정도 없는 프로퍼티이므로 사용하지 말고 참고로만 알아두기.
   *
   * 3. length 프로퍼티
   * 함수 객체의 length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 가리킨다.
   *
   * 4. name 프로퍼티
   * 함수 객체의 name 프로퍼티는 함수 이름을 나타낸다. name 프로퍼티는 ES6 이전까지는 비표준이었다가 ES6에서 정식 표준이 되었다.
   * 익명 함수 표현식의 경우 ES5에서 name 프로퍼티는 빈 문자열을 값으로 갖는다.
   * ES6에서는 함수 객체를 가리키는 식별자를 값으로 갖는다.
   *
   * 5. __proto__ 접근자 프로퍼티
   * 모든 객체는 [[Prototype]]이라는 내부 슬롯을 갖는다. [[Prototype]] 내부 슬롯은 객체지향 프로그래밍의 상속을 구현하는 프로토타입 객체를 가리킨다.
   *
   * 6. prototype vmfhvjxl
   * prototype 프로퍼티는 생성자 함수로 호출할 수 있는 함수 객체, 즉 constructor만이 소유하는 프로퍼티다.
   * 일반 객체와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype 프로퍼티가 없다.
   */
}
