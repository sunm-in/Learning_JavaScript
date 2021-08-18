'use strict';
{
  // 🔍중첩 함수
  // 함수 내부에 정의된 함수를 중첩 함수(nested function) 또는 내부 함수(inner function)라 한다.
  // 그리고 중첩 함수를 포함하는 함수는 외부 함수(outer function)라 부른다. 중첩 함수는 외부 함수 내부에서만 호출할 수 있다.
  function outer() {
    let x = 1;

    // 중첩 함수
    function inner() {
      let y = 2;
      // 외부 함수의 변수를 참조할 수 있다.
      console.log(x + y); // 3
    }

    inner();
  }
  outer();
  console.clear();
}

{
  // 🔍콜백 함수
  // 어떤 일을 반복 수행하는 repeat 함수를 정의해 보자
  // n만큼 어떤 일을 반복한다.
  function repeat(n) {
    // i를 출력한다.
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
  }
  repeat(5); // 0 1 2 3 4
  console.clear();

  // 만약 repeat 함수의 반복문 내부에서 다른 일을 하고 싶다면 함수를 새롭게 정의해야 한다.
  // n만큼 어떤 일을 반복한다.
  function repeat1(n) {
    // i를 출력한다.
    for (let i = 0; i < n; i++) {
      console.log(i);
    }
  }
  repeat(5); // 0 1 2 3 4

  // n만큼 어떤 일을 반복한다.
  function repeat2(n) {
    for (let i = 0; i < n; i++) {
      // i가 홀수일 때만 출력한다.
      if (i % 2) {
        console.log(i);
      }
    }
  }
  repeat2(5); // 1 3
  console.clear();
}

{
  // 위 예제의 함수들은 반복하는 일은 변하지 않고 공통적으로 수행하지만 반복하면서 하는 일의 내용은 다르다.
  // 함수의 변하지 않는 공통 로직은 미리 정의해 두고, 경우에 따라 변경되는 로직은 추상화해서 함수 외부에서 함수 내부로 전달하는 것이다.

  // 외부에서 전달받은 f를 n만큼 반복 호출한다.
  function repeat(n, f) {
    for (let i = 0; i < n; i++) {
      f(i); // i 를 전달하면서 f를 호출
    }
  }
  let logAll = function (i) {
    console.log(i);
  };

  // 반복 호출할 함수를 인수로 전달한다.
  repeat(5, logAll); // 0 1 2 3 4

  let logOdds = function (i) {
    if (i % 2) {
      console.log(i);
    }
  };
  // 반복 호출할 함수를 인수로 전달한다.
  repeat(5, logOdds); // 1 3

  // ✨함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수를 콜백 함수(callback function)라고 하며,
  // 매개 변수를 통해 함수의 외부에서 콜백 함수를 전달받은 함수를 고차 함수라고 한다.✨
  // 고차 함수는 콜백 함수를 자신의 일부분으로 합성한다.
  // 고차 함수는 매개변수를 통해 전달받은 콜백 함수의 호출 시점을 결정해서 호출한다.
  // 콜백 함수는 고차 함수에 의해 호출되며 이때 고차 함수는 필요에 따라 콜백 함수에 인수를 전달할 수 있다.

  // 콜백 함수는 함수형 프로그래밍 패러다임뿐만 아니라 비동기 처리(이벤트 처리, Ajax 통신, 타이머 함수 등)에 활용되는 중요한 패턴이다.
  // 콜백 함수를 사용한 이벤트 처리
  // myButton 버튼을 클릭하면 콜백 함수를 실행한다.
  document,
    getElementById('myButton').addEventListener('click', function () {
      console.log('button clicked!');
    });

  // 콜백 함수를 사용한 비동기 처리
  // 1초 후에 메세지를 출력한다
  setTimeout(function () {
    console.log('1초 경과');
  }, 1000);
}
