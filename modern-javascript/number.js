{
  // Number 생성자 함수
  // 내부 슬롯에 0을 할당한 Number 래퍼 객체를 생성
  const numObj = new Number();
  console.log(numObj); // [Number: 0]

  const numObj2 = new Number(10);
  console.log(numObj2); // [Number: 10]

  let numObj3 = new Number('10');
  console.log(numObj3); // [Number: 10]

  numObj3 = new Number('Hello');
  console.log(numObj3); // [Number: NaN]
}

console.clear();

{
  // 명시적 타입 변환
  // 문자열 타입 => 숫자 타입
  Number('0'); // 0
  Number('-1'); // -1
  Number('10.53'); // 10.53

  // 불리언 타입 => 숫자 타입
  Number(true); // 1
  Number(false); // 0
}

{
  // Number.EPSILON

  0.1 + 0.2; // 0.30000000000000004
  0.1 + 0.2 === 0.3; // false

  function isEqual(a, b) {
    // a와 b를 뺀 값의 절대값이 Number.EPSILON보다 작으면 같은 수로 인정한다.
    return Math.abs(a - b) < Number.EPSILON;
  }
  isEqual(0.1 + 0.2, 0.3); // true
}
