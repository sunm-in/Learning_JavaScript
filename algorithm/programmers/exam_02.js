// 짝수와 홀수
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 제한사항
// num은 int 범위의 정수입니다.
// 0은 짝수입니다.

// 입출력 예
// num -> 3, return -> "Odd"
// num -> 4, return -> "Even"

{
  // (1)
  function solution(num) {
    return num % 2 === 0 ? 'Even' : 'Odd';
  }
}

{
  // (2)
  const solution = (num) => (num % 2 === 0 ? 'Even' : 'Odd');
  console.log(solution(6)); // Even
  console.log(solution(5)); // Odd
}
