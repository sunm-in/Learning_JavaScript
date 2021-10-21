{
  // 정규 표현식
  // 사용자로부터 입력받은 휴대폰 전화번호
  const tel = '010-1234-567팔';

  // 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다.
  const regExp = /^\d{3}-\d{4}-\d{4}$/;

  // tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
  regExp.test(tel); // false
}

{
  // 정규 표현식의 생성
  const target = 'Is this all there is?';

  // 패턴: is
  // 플래그: i => 대소문자를 구별하지 않고 검색한다.
  const regexp = /is/i;

  // test 메서드는 target 문자열에 대해 정규 표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
  regexp.test(target); // true

  // RegExp 생성자 함수를 사용하여 RegExp 객체를 생성할 수도 있다.
  /**
   * pattern: 정규 표현식의 패턴
   * flags: 정규 표현식의 플래그(g, i, m, u, y)
   * new RegExp(pattern[, flags])
   */
  const target2 = 'Is this all there is?';
  const regexp2 = new RegExp(/is/i); // ES6
  // const regexp2 = new RegExp(/is/, 'i');
  // const regexp2 = new RegExp(is, 'i');
  regexp2.test(target2); // true
}

{
  // RegExp 메서드
  // test
  const target = 'Is this all there is?';
  const regExp = /is/;

  regExp.test(target); // true
}

{
  // match
  const target = 'Is this all there is?';
  const regExp = /is/;

  target.match(regExp);
  // -> ["is", index: 5, input: "Is this all there is?", groups: undefined]
}

{
  const target = 'Is this all there is?';
  const regExp = /is/g;
  target.match(regExp); // -> ["is", "is"]
}

{
  // 플래그
  const target = 'Is this all there is?';

  // target 문자열에서 is 문자열을 대소문자를 구별하여 한 번만 검색한다.
  target.match(/is/); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

  // target 문자열에서 is 문자열을 대소문자를 구별하지 않고 한 번만 검색한다.
  target.match(/is/i); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]

  // target 문자열에서 is 문자열을 대소문자를 구별하여 전역 검색한다.
  target.match(/is/g); // [ 'is', 'is' ]

  // target 문자열에서 is 문자열을 대소문자를 구별하지 않고 전역 검색한다.
  target.match(/is/gi); // [ 'Is', 'is', 'is' ]
}

{
  // 패턴
  // 문자열 검색

  //검색 대상 문자열과 플래그를 생략한 정규 표현식의 매칭 결과를 구하면 대소문자를 구별하여 정규 표현식과 매치한 첫 번째 결과만 반환한다.

  const target = 'Is this all there is?';

  // 'is' 문자열과 매치하는 패턴, 플래그가 생략 => 대소문자를 구별한다.
  const regExp = /is/;

  // target과 정규 표현식이 매치하는지 테스트
  regExp.test(target); // true

  // target과 정규 표현식의 매칭 결과를 구한다.
  target.match(regExp); // [ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
}

{
  // 대소문자를 구별하지 않고 검색하려면 플래그 i를 사용한다.

  const target = 'Is this all there is?';

  const regExp = /is/i;
  target.match(regExp); // [ 'Is', index: 0, input: 'Is this all there is?', groups: undefined ]
}

{
  // 검색 대상 문자열 내에서 패턴과 매치하는 모든 문자열을 전역 검색하려면 플래그 g를 사용한다.

  const target = 'Is this all there is?';

  const regExp = /is/gi;
  target.match(regExp); // ["Is", "is", "is"]
}

{
  // 임의의 문자열 검색

  // .은 임의의 문자 한 개를 의미한다. 문자의 내용은 무엇이든 상관없다.

  const target = 'Is this all there is?';

  // 임의의 3자리 문자열을 대소문자 구별하여 전역 검색
  const regExp = /.../g;
  target.match(regExp); // ['Is ', 'thi', 's a', 'll ', 'the', 're ', 'is?'];
}

console.clear();

{
  // 반복 검색
  const target = 'A AA B BB Aa Bb AAA';

  // 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색
  const regExp = /A{1,2}/g;
  target.match(regExp); // [ 'A', 'AA', 'A', 'AA', 'A' ]
}

{
  const target = 'A AA B BB Aa Bb AAA';

  // 'A'가 2번 반복되는 문자열을 전역 검색
  const regExp = /A{2}/g;
  target.match(regExp); // ["AA", "AA"]
}

{
  const target = 'A AA B BB Aa Bb AAA';

  // 'A'가 최소 2번 이상 반복되는 문자열을 전역 검색
  const regExp = /A{2,}/g;
  target.match(regExp); // ["AA", "AAA"]
}
