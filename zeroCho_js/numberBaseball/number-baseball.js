{
  // 무작위로 숫자를 만드는 함수 Math.random()
  // 숫자야구 게임에서는 1 에서 9까지의 숫자가 필요하므로 Math.random()에 9를 곱한 후 1을 더하면 된다.
  console.log(Math.random() * 9 + 1);

  // 숫자를 자연수로 만들려면 내림, 올림, 반올림을 해야 한다.
  // 숫자의 내림: Math.floor(), 올림: Math.ceil(), 반올림: Math.round()
  console.log(Math.floor(Math.random() * 9 + 1));

  // 무작위 숫자를 뽑는 과정
  Math.random(); // 0 <= x < 1
  Math.random() * 9; // 0 <= x < 9
  Math.random() * 9 + 1; // 1 <= x < 10
  Math.floor(Math.random() * 9 + 1); // x = {1, 2, 3, 4, 5, 6, 7, 8, 9}
}

{
  // 🔍 1부터 원하는 숫자까지 들어 있는 배열 만들기
  // 반복문을 사용해 배열에 술자를 push 하면 된다.
  const numbers = [];
  for (let n = 1; n <= 5; n + 1) {
    numbers.push(n);
  }
}

{
  // 🔍 indexOf, includes
  /**
   * 배열이나 문자열에 원하는 값이 들어 있는지 찾는 메서드
   * 원하는 값이 들어 있다면 해당 인덱스를 알려주고, 들어 있지 않다면 -1을 반환한다.
   * includes는 조금 더 직관적으로 true/false 를 반환한다.
   */
  '2345'.indexOf(3) === 1;
  '2345'.indexOf(6) === -1;
  ['2', '3', '4', '5'].indexOf('5') === 3;
  ['2', '3', '4', '5'].indexOf(5) === -1; // 요소의 자료형까지 같아야 함
  '2345'.includes(3) === true;
  ['2', '3', '4', '5'].includes(5) === false;
}

{
  /**
   * 🔍 forEach
   * answer 배열에 있는 요소들을 forEach 메서드로 순회한다.
   * forEach는 인수로 함수를 받고 배열의 요소 하나 하나에 인수로 받은 함수를 각각 적용한다. 이때 요소 순서대로 함수를 적용하므로 반복문의 역할을 한다.
   */
  const answer = [3, 1, 4, 6];
  // forEach
  answer.forEach((element, index) => {
    // const index = value.indexOf(element);
    if (index > -1) {
      // 일치하는 숫자 발견
      if (index === i) {
        // 자릿수도 같음
        strike += 1;
      } else {
        // 숫자만 같음
        ball += 1;
      }
    }
  });
}

{
  // 🔍 map
  // 기존 배열에 각각 요소에 2를 곱한 새로운 배열로 만들기
  const array = [1, 2, 3, 4];
  const result = [];
  for (let i = 0; i < 4; i++) {
    result.push(array[i] * 2);
  }
  console.log(result); // [2, 4, 6, 8]

  array.map((element, i) => {
    return element * 2;
  }); // [2, 4, 6, 8]
  // 기존 배열은 그대로 유지
}

{
  /**
   * 🔍 document.createElement, document.createTextNode
   * 각각 태그와 텍스를 만드는 메서드.
   * 단, 다른 태그에 append 나 appendChild 하기 전까지는 화면에 보이지 않는다.
   *
   * 🔍 appendChild와 append
   * document.createElement, document.createTextNode 로 만든 태그나 텍스트를 선택한 태그의 자식 태그로 넣는다.
   * appendChild 로는 하나만 넣을 수 있고, append 를 사용하면 여러 개를 동시에 넣을 수 있다.
   * 또한 append 로 텍스트를 추가할 때는 document.createTextNode 대신 문자열을 바로 넣어도 된다.
   */
}
