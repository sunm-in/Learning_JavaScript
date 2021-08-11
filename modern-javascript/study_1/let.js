// let 키워드
{
  // 🔍 1. 변수 중복 선언 금지
  /**
   * var 키워드로 이름이 동일한 변수를 중복 선언하면 아무런 에러가 발생하지 않는다.
   * 값까지 할당했다면 의도치 않게 먼저 선언된 변수 값이 재할당되어 변경되는 부작용이 발생한다.
   *
   * let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러(SyntaxError)가 발생한다.
   */
  var foo = 123;
  var foo = 456;
  let bar = 123;
  // let이나 const 키워드로 선언된 변수는 같은 스코프 내에서 중복 선언을 허용하지 않는다.
  // let bar = 456; // SyntaxError: Identifier 'bar' has already been declared
}

{
  // 🔍 2. 블록 레벨 스코프(block-level scope)
  /**
   * let 키워드로 선언한 변수는 모든 코드 블록(함수, if 문, for 문, while 문, try/catch 문 등)을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다
   */
  let foo = 1; // 전역 변수
  {
    let foo = 2; // 지역 변수
    let bar = 3; // 지역 변수
  }
  console.log(foo); // 1
  // console.log(bar); // ReferenceError: bar is not defined
  /**
   * let 키워드로 선언된 변수는 블록 레벨 스코프를 따른다. 코드 블록 내에서 선언된 foo 변수와 bar 변수는 지역 변수다.
   * 전역에서 선언된 foo 변수와 코드 블록 내에서 선언된 foo 변수는 다른 별개의 변수.
   * 또한 bar 변수도 블록 레벨 스코프를 갖는 지역 변수다. 따라서 전역에서는 bar 변수를 참조할 수 없다.
   */
  console.clear();
}

{
  // 🔍 3. 변수 호이스팅
  // var 키워드로 선언한 변수와 달리 let 키워드로 선언한 변수는 변수 호이스팅이 발생하지 않는 것처럼 동작한다.
  // console.log(foo); // ReferenceError: Cannot access 'foo' before initialization
  let foo;
  console.clear();

  // var 키워드로 선언한 변수는 런타임 이전에 선언 단계와 초기화 단계가 실행된다.
  // 따라서 변수 선언문 이전에 변수를 참조할 수 있다.
  console.log(foo); // undefined

  var foo;
  console.log(foo); // undefined

  foo = 1; // 할당문에서 할당 단계가 실행된다.
  console.log(foo); // 1

  /**
   * ✨ let 키워드로 선언한 변수는 "선언 단계"와 "초기화 단계"가 분리되어 진행된다. ✨
   * 스코프의 시작 지점부터 초기화 시작 지점까지 변수를 참조할 수 없는 구간을 일시적 사각지대라고 부른다.
   */
  // 런타임 이전에 선언 단계가 실행된다. 아직 변수가 초기화되지 않았다.
  // 초기화 이전의 일시적 사각지대에서는 변수롤 참조할 수 없다.
  console.log(foo); // ReferenceError: foo is not defined

  let foo; // 변수 선언문에서 초기화 단계가 실행된다.
  console.log(foo); // undefined

  foo = 1; // 할당문에서 할당 단계가 실행된다.
  console.log(foo); // 1
}
