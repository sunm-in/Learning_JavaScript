// const 키워드 -> const 키워드는 상수(constant)를 선언하기 위해 사용한다.
{
  // 🔍 1. 선언과 초기화
  // ✨ const 키워드로 선언한 변수는 반드시 선언과 동시에 초기화해야 한다. ✨
  const foo = 1;
  // const foo2; // SyntaxError: Missing initializer in const declaration
}

{
  // 🔍 2. 재할당 금지
  // var 또는 let 키워드로 선언한 변수는 재할당이 자유로우나 ✨ const 키워드로 선언한 변수는 재할당이 금지된다. ✨
  const foo = 1;
  // foo = 2; // TypeError: Assignment to constant variable.
}

{
  // 🔍 3. 상수 -> 재할당이 금지된 변수를 말한다.
  // 상수는 상태 유지와 가독성, 유지보수의 편의를 위해 적극적으로 사용해야 한다.

  {
    // 세전 가격
    let preTaxPrice = 100;

    // 세후 가격
    // 0.1의 의미를 명확히 알기 어렵기 때문에 가독성이 좋지 않다.
    let afterTaxPrice = preTaxPrice + preTaxPrice * 0.1;
    console.log(afterTaxPrice); // 110
  }

  {
    /**
     * const 키워드로 선언된 변수에 원시 값을 할당한 경우 원시 값은 변경할 수 없는 값이고
     * const 키워드에 의해 재할당이 금지되므로 할당된 값을 변경할 수 있는 방법은 없다.
     */
    // 세율을 의미하는 0.1은 변경할 수 없는 상수로서 사용될 값
    // 변수 이름을 대문자로 선언해 상수임을 명확히 나타낸다.
    const TAX_RATE = 0.1;

    // 세전 가격
    let preTaxPrice = 100;
    // 세후 가격
    let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE;
    console.log(afterTaxPrice); // 100
  }
}

{
  // 🔍 4. const 키워드와 객체 -> const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.
  const person = {
    name: 'Lee',
  };

  // 객체는 변경 가능한 값이다. 따라서 재할당 없이 변경이 가능하다.
  person.name = 'Kim';
  console.log(person); // { name: 'Kim' }

  // ✅ const 키워드는 재할당을 금지할 뿐 "불변"을 의미하지는 않는다.
}

/**
 * 🔍 var vs. let vs. const
 * 변수 선언에는 기본적으로 const를 사용하고 let은 재할당이 필요한 경우에 한정해 사용하는 것이 좋다.
 * const 키워드를 사용하면 의도치 않은 재할당을 방지하기 때문에 좀 더 안전하다.
 *
 * 1. ES6를 사용한다면 var 키워드는 사용하지 않는다.
 * 2. 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
 * 3. 변경이 발생하지 않고 읽기 전용으로 사용하는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다.
 * const 키워드는 재할당을 금지하므로 var, let 키워드보다 안전하다.
 *
 * 변수를 선언하는 시점에는 재할당이 필요할지 잘 모르는 경우가 많다.
 * 그리고 객체는 의외로 재할당하는 경우가 드물다. 따라서 변수를 선언할 때는 일단 const 키워드를 사용하자.
 * 반드시 재할당이 필요하다면 그때 const 키워드를 let 키워드로 변경해도 변경해도 결코 늦지 않다.
 */
