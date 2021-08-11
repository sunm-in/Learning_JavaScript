// 핸드폰 번호 가리기

// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때,
// 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.

// 입출력 예
// phone_number: "01033334444"  return: "*******4444"
// phone_number: "027778888"  return: "*****8888"

function solution(phone_number) {
  const len = phone_number.length - 4;
  return '*'.repeat(len) + phone_number.substring(len);

  /**
   * repeat() -> 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환한다.
   * str.repeat(count);
   * count -> 문자열을 반복할 횟수. 0과 양의 무한대 사이의 정수
   * 
   * substring() -> string 객체의 시작 인덱스로 부터 종료 인덱스 전 까지 문자열의 부분 문자열을 반환한다.
   * str.substring(indexStart[, indexEnd])
   * indexStart -> 반환문자열의 시작 인덱스
   * indexEnd   -> 옵션, 반환문자열의 마지막 인덱스 (포함하지 않음)
   * 반환값 -> 기존문자열의 부분 문자열을 반환
   * indexEnd가 생략된 경우, substring() 문자열의 끝까지 모든 문자를 추출한다.
   */
}

{
  // 다른 풀이 1
  function solution(phone_number) {
    return phone_number.replace(/\d(?=\d{4})/g, "*");
  }
}

{
  // 다른 풀이 2
  function solution(phone_number){
    var result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  ​
    return result;
  }
}