{
  // 함수를 반환하는 함수
  const func = () => {
    return () => {
      console.log('hello');
    };
  };

  // func 함수 호출
  const innerFunc = func();
  innerFunc(); // hello
}

{
  // 🔍 고차 함수에서 {}와 return 생략
  const func = (msg) => () => {
    console.log(msg);
  };
}

{
  // hello라는 문자열을 다른 값으로 바꾸고 싶을 때, 매개변수를 사용한다. -> 바꾸고 싶은 자리를 매개변수로 만들면 된다.
  const func = (msg) => {
    return () => {
      console.log(msg);
    };
  };

  const innerFunc1 = func('hello');
  const innerFunc2 = func('javascript');
  const innerFunc3 = func();
  innerFunc1(); // hello
  innerFunc2(); // javascript
  innerFunc3(); // undefined
}

{
  // 👀 quiz
  const hof = (a) => (b) => (c) => {
    return a + b * c;
  };
  const first = hof(3);
  const second = first(4);
  const third = second(5);
  console.log(third); // ?

  // first, second, third가 어떤 반환값을 가지는지 하나씩 확인하기
  // first
  (b) => (c) => {
    // return 3 + (b * c);
  };

  // second
  (c) => {
    // return 3 + (4  * c);
  };

  //third
  // 3 + (4 * 5);

  console.log(third); // ✅ 23
}

{
  /**
   * 🔍 if 문이 여러 번 중첩될수록 코드는 점점 더 읽이 어려워진다.
   * 중첩을 제거하는 방법
   * 1. if문 다음에 나오는 공통된 절차를 각 분기점 내부에 넣는다.
   * 2. 분기점에서 짧은 절차부터 실행하게 if 문을 작성한다.
   * 3. 짧은 절차가 끝나면 return(함수 내부의 경우)이나 break(for 문 내부의 경우)로 중단한다.
   * 4. else 를 제거한다(이때 중첩 하나가 제거된다).
   * 5. 다음 중첩된 분기점이 나오면 1~4의 과정을 반복한다.
   */
  function test() {
    let result = '';
    if (!a) {
      result = 'a';
      result += 'b';
      return result;
    }
    if (!b) {
      result = 'c';
    }
    result += 'b';
    return result;
  }
}
