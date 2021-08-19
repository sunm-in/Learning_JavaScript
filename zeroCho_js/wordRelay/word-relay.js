/**
 * 🔍 대화 상자 띄우기
 * prompt   사용자로부터 값을 전달 받는다.
 * alert    사용자에게 경고 메세지를 표시한다.
 * confirm  사용자의 확인을 요구한다.
 */
const number = parseInt(prompt('몇 명이 참가하나요?'), 10);
alert(number);
const yesOrNo = confirm('맞나요?');
console.log('number', number);

/**
 * 🔍 HTML 태그 선택하기
 * 한 가지 선택할 때 -> document.querySelector('선택자');
 * 여러 개 선택할 때 -> document.querySelectorAll('선택자');
 *
 * #id, .class
 * document.querySelector('#아이디명');
 * document.querySelectorAll('.클래스명');
 */

// 🔍 div의 자손인 span을 찾을 때 -> <div><span id="order">1</span>번째 참가자</div>
const $span = document.querySelector('div span');
// document.querySelector('선택자 내부선택자 내부선택자...');

// 🔍 이벤트 리스너 달기(콜백함수)
// 사용법: 태그.addEventListener('이베튼 이름', 리스너함수);
// (1)
document.querySelector('input').addEventListener('input', (event) => {
  console.log('글자 입력', event.target.value);
});

// (2)
const onClick = function () {
  console.log('버튼 입력');
};

document.querySelector('button').addEventListener('click', onClick);

/**
 * 입력 태그(input, select, textarea 등)가 아닌 일반 태그들의 내부 값을 가져올 때는 value가 아니라 textContent 속성을 사용한다.
 * 입력태그.value;      -> 입력창의 값을 가져옴
 * 입력태그.value = 값;  -> 입력창에 값을 넣음
 *
 * 태그.textContent;      -> 태그 내부의 문자를 가져옴
 * 태그.textContent = 값;  -> 태그 내부의 문자를 해당 값으로 설정함
 */

// 태그들의 내부 값을 가져올 때 사용해야 하는 속성
// input    -> value
// button   -> textContent
// select   -> value
// div      -> textContent
// textarea -> value
// span     -> textContent

// 입력 태그를 선택하게 하려면 focus 라는 메서드를 사용한다. 입력 태그 내부에 커서가 위치하게 해서 다음 사용자가 입력하기 편하게 도와준다.
입력태그.focus(); // 입력창을 하이라이트

// 🔍 || (OR) 의 관계 -> 둘 중 하나만 true여도 true를 반환
// 첫 번째 조건, 두 번째 조건, 최종 결과
// true       true        true
// true       false       true
// false      true        true
// false      false       false

// 🔍 && (AND) 의 관계 -> 둘 다 true여야 true를 반환
// 첫 번쨰 조건, 두 번째 조건, 최종 결과
// true       true        true
// true       false       false
// false      true        false
// false      false       false

/**
 * ✅ 순서도 그리기
 * 프로그래밍에서 가장 중요한 것은 코드를 작성하기 전에 올바른 순서도를 만드는 것이다.
 * 한 번에 순서도를 완성할 수는 없고, 코딩하면서 계속 수정해야 한다.
 * 하지만 다음 원칙을 지키면서 순서도를 설계한다면 수정하는 횟수와 전체 절차 개수를 최소화할 수 있다.(코딩 속도가 빨라짐)
 *
 * 1. 프로그램 절차의 개수는 정해져 있어야 한다.
 * 2. 각 절차는 항상 같은 내용이어야 한다.
 * 3. 모든 가능성을 고려해야 한다.
 * 4. 예시는 절차를 검증하는 데 사용한다.
 *
 * 순서도를 만들 때 사용자의 이벤트(버튼 클릭, 입력창 글자 입력 등)가 필요한 곳에서 순서도를 끊어야 한다.
 */
