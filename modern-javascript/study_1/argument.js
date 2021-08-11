// 인수

{
  // 🔍인수 확인
  function add(x, y) {
    return x + y;
  }
  // 위 함수에서는 아마도 2개의 숫자 타입 인수를 전달받아 그 합계를 반환하려는 것으로 추측된다.
  // 하지만 코드상으로는 어떤 타입의 인수를 전달해야 하는지, 어떤 타입의 값을 반환하는지 명확하지 않다.
}

{
  function add(x, y) {
    return x + y;
  }

  console.log(add(2)); // NaN
  console.log(add('a', 'b')); // 'ab'

  // 자바스크립트 문법상 어떠한 문제도 없으므로 자바스크립트 엔진은 아무런 이의 제기없이 위 코드를 실행할 것이다.
  // 1. 자바스크립트 함수는 매개변수와 인수의 개수가 일치하는지 확인하지 않는다.
  // 2. 자바스크립트는 동적 타입 언어다. 따라서 자바스크립트 함수는 매개변수의 타입을 사전에 지정할 수 없다.
}

{
  // 따라서 자바스크립트의 경우 함수를 정의할 때 적절한 인수가 전달되었는지 확인할 필요가 있다.
  function add(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
      // 매개변수를 통해 전달된 인수의 타입이 부적절한 경우 에러를 발생시킨다.
      throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x + y;
  }
  console.log(add(2)); // TypeError: 인수는 모두 숫자 값이어야 합니다.
  console.log(add('a', 'b')); // TypeError: 인수는 모두 숫자 값이어야 합니다.

  // 함수 내부에서 적절한 인수가 전달되었는지 확인하더라도 부적절한 호출을 사전에 방지할 수는 없고 에러는 런타임에 발생하게 된다.
  // 따라서 ⭐️타입스크립트⭐️와 같은 정적 타입을 선언할 수 있는 자바스크립트의 상위 확장을 도입해서
  // 컴파일 시점에 부적절한 호출을 방지할 수 있게 하는 것도 하나의 방법이다.
}

{
  // 🔍매개변수의 최대 개수
  // 매개변수는 순서에 의미가 있다. 따라서 매개변수가 많아지면 함수를 호출할 때 전달해야 할 인수의 순서를 고려해야 한다.
  // 이는 함수의 사용법을 이해하기 어렵게 만들고 실수를 발생시킬 가능성을 높인다. -> 유지보수성이 나빠진다.
  //
  // 함수의 이상적인 매개변수 개수는 0개이며 적을수록 좋다. ⭐️이상적인 함수는 한 가지 일만 해야 하며 가급적 작게 만들어야 한다.⭐️
}

{
  // 🔍반환문
  // 함수는 return 키워드와 표현식(반환값)으로 이뤄진 반환문을 사용해 실행 결과를 함수 외부로 반환(return)할 수 있다.
  function multiply(x, y) {
    return x * y; // 반환문
  }

  // 함수 호출은 반환값으로 평가된다.
  let result = multiply(3, 5);
  console.log(result); // 15
}
{
  // multiply 함수는 두 개의 인수를 전달받아 곱한 결과값을 return 키워드를 사용해 반환한다.
  // 함수는 return 키워드를 사용해 자바스크립트에서 사용 가능한 모든 값을 반환할 수 있다.
  // ⭐️함수 호출은 표현식이다.⭐️ -> return 키워드가 반환한 표현식의 평가 결과, 즉 반환값으로 평가된다.
  //
  // 반환문의 두 가지 역할
  // 1. 반환문은 함수의 실행을 중단하고 함수 몸체를 빠져나간다.
  function multiply(x, y) {
    return x * y; // 반환문
    // 반환문 이후에 다른 문이 존재하면 그 문은 실행되지 않고 무시된다.
    console.log('실행되지 않는다.');
  }
  console.log(multiply(3, 5)); // 15

  // 2. 반환문은 return 키워드 뒤에 오는 표현식을 평가해 반환한다.
  // return 키워드 뒤에 반환값으로 사용 할 표현식을 명시적으로 지정하지 않으면 undefined가 반환된다.
  function foo() {
    return;
  }
  console.log(foo()); // undefined
}
{
  // 반환문은 생략할 수 있다. 이때 함수는 함수 몸체의 마지막 문까지 실행한 후 암묵적으로 undefined를 반환한다.
  function foo() {
    // 반환문을 생략하면 암묵적으로 undefined 반환
  }
  console.log(foo()); // undefined

  // 반환문은 함수 몸체 내부에서만 사용할 수 있다. 전역에서 반환문을 사용하면 문법 에러(SyntaxError: Illegal return statement)가 발생한다.
}
