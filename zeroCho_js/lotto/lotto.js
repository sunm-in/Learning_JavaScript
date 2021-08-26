{
  // 🔍 피셔-예이츠 셔플 알고리즘
  // 숫자를 무작위로 섞는 방법. 먼저 무작위 인덱스를 하나 뽑은 후, 그에 해당되는 요소를 새로운 배열로 옮긴다. 이를 반복하다 보면 새 배열에 무작위로 섞인 숫자들이 들어간다.

  // 🔍 sort 비교 함수에 적힌 내용대로 배열을 정렬하는 메서드
  // 배열.sort(비교 함수)
  // 비교 함수: (a, b) => 반환값
  const array = [2, 5, 4, 1, 3];
  array.sort((a, b) => a - b); // [ 1, 2, 3, 4, 5 ]
  array.sort((a, b) => b - a); // [ 5, 4, 3, 2, 1 ]
}

{
  // setTimeout() 지정한 시간(밀리초) 뒤에 지정한 작업을 수행하는 타이머
  setTimeout(() => {
    // 내용
  }, 밀리초);

  function func() {
    console.log('hello');
  }
  // 내부 함수가 하나고 인수가 없는 경우에는 첫 번째 코드처럼 줄여 쓸 수 있다.
  // (1)
  setTimeout(func, 3500);

  // (2)
  setTimeout(() => {
    func();
  }, 3500);
}

{
  // var, let
  // 변수는 스코프(scope, 범위)라는 것을 가진다. var 는 함수 스코프를 가지고, let 은 블록 스코프를 가진다.

  // 🔍 var
  function b() {
    var a = 1;
  }
  // console.log(a); // ReferenceError: a is not defined
  // a 는 함수 안에 선언된 변수이므로 함수 바깥에서 접근 X, 함수를 경계로 접근 여부가 달라지는 것을 함수 스코프라고 한다.

  if (true) {
    var a = 1;
  }
  console.log(a); // 1
  // var 은 함수 스코프(함수만 신경 씀)라서 if 문 안에 들어 있으면 바깥에서 접근이 가능하다.

  for (var i = 0; i < 5; i++) {}
  console.log(i); // 5
}

{
  // 🔍 let
  if (true) {
    let a = 1;
  }
  console.log(a); // ReferenceError: a is not defined

  for (let i = 0; i < 5; i++) {}
  console.log(i); // ReferenceError: i is not defined
}
