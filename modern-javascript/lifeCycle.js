{
  /**
   * 전역 변수의 문제점
   * 전역 변수의 무분별한 사용은 위험하다. 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다.
   */
  // 🔍 변수의 생명 주기
  // 1. 지역 변수의 생명 주기
  // 변수는 생성되고 소멸되는 생명 주기(life cycle)가 있다. 변수는 자신이 선언된 위치에서 생성되고 소멸한다.
  // 전역 변수의 생명 주기는 애플리케이션의 생명 주기와 같다.
  // 하지만 함수 내부에서 선언된 지역 변수는 함수가 호출되면 생성되고 함수가 종료하면 소멸한다.
  function foo() {
    let x = 'local';
    console.log(x); // local
    return x;
  }
  foo();
  // console.log(x); // ReferenceError: x is not defined
  // 지역 변수 x는 foo가 호출되기 이전까지는 생성되지 않는다. foo 함수를 호출하지 않으면 함수 내부의 변수 선언문이 실행되지 않기 때문이다.
  // 함수가 종료하면 x 변수도 소멸되어 생명 주기가 종료된다. 따라서 함수 내부에서 선언된 지역 변수 x는 foo함수가 호출되어 실행되는 동안에만 유효하다.
  // 즉, ✨ 지역 변수의 생명 주기는 함수의 생명 주기와 일치한다. ✨
  console.clear();

  var x = 'global';
  function foo() {
    console.log(x); // undefined
    var x = 'local';
  }
  foo();
  console.log(x); // global
  /**
   * foo 함수 내부에서 선언된 지역 변수 x는 undefined로 초기화되어 있다.
   * 따라서 전역 변수 x를 참조하는 것이 아니라 지역 변수 x를 참조해 값을 출력한다.
   * 변수 할당문이 실행되기 이전까지는 undefined 값을 갖는다.
   *
   * 이처럼 호이스팅은 스코프를 단위로 동작한다.
   * 호이스팅은 변수 선언이 스코프의 선두로 끌어 올려진 것처럼 동작하는 자바스크립트 고유의 특징을 말한다.
   */
}

{
  /**
   * 2. 전역 변수의 생명 주기
   * 함수와 달리 전역 코드는 명시적인 호출 없이 실행된다.
   * 전역 코드에는 반환문을 사용할 수 없으므로 마지막 문이 실행되어 더 이상 실행할 문이 없을 때 종료한다.
   */
  /**
   * ✅ 전역 객체
   * 코드가 실행되기 이전 단계에 자바스크립트 엔진에 의해 어떤 객체보다고 먼저 생성되는 특수한 객체다.
   * var 키워드로 선언한 전역 변수와 전역 함수를 프로퍼티로 갖는다.
   */
  // ✨ var 키워드로 선언한 전역 변수의 생명 주기는 전역 객체의 생명 주기와 일치한다. ✨
}
console.clear();
{
  // 🔍 전역 변수의 사용을 억제하는 방법
  // 전역 변수를 반드시 사용해야 할 이유를 찾지 못한다면 지역 변수를 사용해야 한다. 변수의 스코프는 좁을수록 좋다.

  // 1. 즉시 실행 함수
  // 모든 코드를 즉시 실행 함수로 감싸면 모든 변수는 즉시 실행 함수의 지역 변수가 된다.
  (function () {
    var foo = 10; // 즉시 실행 함수의 지역 변수
    // ...
  });
  console.log(foo); // ReferenceError: foo is not defined

  // 2. 네임스페이스 객체
  // 전역에 네임스페이스 역할을 담당할 객체를 생성하고 전역 변수처럼 사용하고 싶은 변수를 프로퍼티로 추가하는 방법
  var MYAPP = {}; // 전역 네임스페이스 객체
  MYAPP.person = {
    name: 'Lee',
    address: 'Seoul',
  };
  console.log(MYAPP.person.name); // Lee

  // 3. 모듈 패턴
  // 모듈 패턴은 클래스를 모방해서 관련이 있는 변수와 함수를 모아 즉시 실행 함수로 감싸 하나의 모듈을 만든다.
  var Counter = (function () {
    // private qustn
    var num = 0;

    // 외부로 공개할 데이터나 메서드를 프로퍼티로 추가한 객체를 반환한다.
    return {
      increase() {
        return ++num;
      },
      decrease() {
        return --num;
      },
    };
  })();

  // private 변수는 외부로 노출되지 않는다.
  console.log(Counter.num); // undefined

  console.log(Counter.increase()); // 1
  console.log(Counter.increase()); // 2
  console.log(Counter.decrease()); // 1
  console.log(Counter.decrease()); // 0

  // 4. ES6 모듈
  // ES6 모듈을 사용하면 더는 전역 변수를 사용할 수 없다. ES6 모듈은 파일 자체의 독자적인 모듈 스코프를 제공한다.
  // script 태그에 type="module" 어트리뷰트를 추가하면 로드된 자바스크립트 파일은 모듈로서 동작한다. 모듈의 파일 확장자는 mjs를 권장한다.
}
