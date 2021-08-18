// 참조에 의한 전달과 외부 상태의 변경
// 원시 값은 값에 의한 전달(pass by value), 객체는 참조에 의한 전달(pass by reference)방식으로 동작한다.
// 매개변수도 함수 몸체 내부에서 변수와 동일하게 취급되므로 타입에 따라 값에 의한 전달, 참조에 의한 전달 방식을 그대로 따른다.
{
  // 매개변수 primitive는 원시 값을 전달받고, 매개변수 obj는 객체를 전달받는다.
  function changeVal(primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
  }

  // 외부 상태
  let num = 100;
  let person = { name: 'Lee' };

  console.log(num); // 100
  console.log(person); // {name: "Lee"}

  // 원시 값은 값 자체가 복사되어 전달되고 객체는 참조 값이 복사되어 전달된다
  changeVal(num, person);

  // 원시 값은 원본이 훼손되지 않는다.
  console.log(num); // 100

  // 객체는 원본이 훼손된다.
  console.log(person); // {name: "Kim"}
  console.clear();
}

{
  // 다양한 함수의 형태
  // 🔍즉시 실행 함수
  // 함수 정의와 동시에 호출되는 함수를 즉시 실행 함수라고 한다. 즉시 실행 함수는 단 한 번만 호출되며 다시 호출할 수 없다.
  // 즉시 실행 함수는 반드시 그룹 연산자 ( ... )로 감싸야 한다. 그렇지 않으면 에러가 발생한다.

  // 익명 즉시 실행 함수
  (function () {
    let a = 3;
    let b = 5;
    return a * b;
  })();

  // 즉시 실행 함수는 함수 이름이 없는 익명 함수를 사용하는 것이 일반적이다.
  // 함수 이름은 몸체에서만 참조할 수 있는 식별자이므로 즉시 실행 함수를 다시 호출할 수는 없다.
  // 기명 즉시 실행 함수
  (function foo() {
    let a = 3;
    let b = 5;
    return a * b;
  })();

  // foo(); // ReferenceError: foo is not defined
}

{
  // 🔍재귀 함수
  // 함수가 자기 자신을 호출하는 것을 재귀 호출(recursive call)이라 한다.
  // 재귀 함수(recursive function)는 자기 자신을 호출하는 행위, 즉 재귀 호출을 수행하는 함수를 말한다.
  // 재귀 함수는 반복되는 처리를 위해 사용한다.

  // 10부터 0까지 출력하는 함수
  function countdown(n) {
    for (let i = n; i >= 0; i--) console.log(i);
  }
  countdown(10);

  console.clear();
  // 반복문 없이 재귀 함수를 사용해서 구현하기
  function countdown(n) {
    if (n < 0) return;
    console.log(n);
    countdown(n - 1); // 재귀 호출
  }
  countdown(10);

  console.clear();
  // 자기 자신을 호출하는 재귀 함수를 사용하면 반복되는 처리를 반복문 없이 구현할 수 있다.
  // 팩토리얼은 재귀 함수로 간단히 구현할 수 있다.

  // 팩토리얼(계승)은 1부터 자신까지의 모든 양의 정수의 곱이다.
  // n! = 1 * 2 * ... * (n-1) * n
  function factorial(n) {
    // 탈출 조건: n이 1 이하일 때 재귀 호출을 멈춘다.
    if (n <= 1) return 1;
    // 재귀 호출
    return n * factorial(n - 1);
  }

  console.log(factorial(0)); // 0! = 1
  console.log(factorial(1)); // 1! = 1
  console.log(factorial(2)); // 2! = 2 * 1 = 2
  console.log(factorial(3)); // 3! = 3 * 2 * 1 = 6
  console.log(factorial(4)); // 4! = 4 * 3 * 2 * 1 = 24
  console.log(factorial(5)); // 5! = 5 * 4 * 3 * 2 * 1 = 120

  console.clear();
  // 팩토리얼 예제를 반복문으로 구현하기
  function factorial(n) {
    if (n <= 1) return 1;

    let res = n;
    while (--n) res *= n;
    return res;
  }
  console.log(factorial(0));
  console.log(factorial(1));
  console.log(factorial(2));
  console.log(factorial(3));
  console.log(factorial(4));
  console.log(factorial(5));

  // 재귀 함수는 반복되는 처리를 반복문 없이 구현할 수 있다는 장점이 있지만 무한 반복에 빠질 위험이 있고,
  // 이로 인해 스택 오버플로 에러를 발생시킬 수 있으므로 주의해서 사용해야 한다.
  // 따라서 재귀 함수는 반복문을 사용하는 것보다 재귀 함수를 사용하는 편이 더 직관적으로 이해하기 쉬울 때만 한정적으로 사용하는 것이 바람직하다.
}
