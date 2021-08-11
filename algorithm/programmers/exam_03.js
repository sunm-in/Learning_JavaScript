// 제일 작은 수 제거하기
// 정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

// 제한 조건
// arr은 길이 1 이상인 배열입니다.
// 인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.

// 입출력 예
// arr: [4,3,2,1]   return: [4,3,2]
// arr: [10]        return: [-1]

function solution(arr) {
  var answer = [];

  if (arr.length <= 1) {
    return [-1];
    // 배열 arr의 length, 즉 배열 arr의 요소의 갯수가 1 이하면 [-1]을 리턴
  } else {
    arr.splice(arr.indexOf(Math.min(...arr)), 1);
    // 배열 arr의 요소의 갯수가 2개 이상이면 배열 arr에서 가장 작은 수를 제거한 배열을 리턴
    answer = arr;
  }
  return answer;
}

// find()      -> 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환한다.
// findIndex() -> 주어진 판별 함수를 만족하는 첫 번째 요소에 대한 인덱스를 반환한다.

// indexOf()   -> str.indexOf(searchValue[, fromIndex])
// searchValue -> 찾으려는 문자열. 아무 값도 주어지지 않으면 문자열 "undefined"를 찾으려는 문자열로 사용
// fromIndex   -> 문자열에서 찾기 시작하는 위치를 나타내는 인덱스 값
// 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환한다.

// splice() -> 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경한다.
// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
// start -> 배열의 변경을 시작할 인덱스, 배열의 길이보다 큰 값이라면 실제 시작 인덱스는 배열의 길이로 설정된다.
// 음수인 경우 배열의 끝에서부터 요소를 세어나간다.(-n이면 요소 끝의 n번째 요소를 가리키며 array.length - n번째 인덱스와 같다.)
// deleteCount (Optional) -> 배열에서 제거할 요소의 수
// item1, item2, ... (Optional) -> 배열에 추가할 요소. 아무 요소도 지정하지 않으면 splice()는 요소를 제거하기만 한다.
// 반환 값 -> 제거한 요소를 담은 배열.
