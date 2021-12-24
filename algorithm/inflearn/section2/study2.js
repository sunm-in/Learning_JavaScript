{
  // 큰 수 출력하기
  function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]) answer.push(arr[i]);
    }
    return answer;
  }
  let arr = [7, 3, 9, 5, 6, 12];
  console.log(solution(arr));
}
{
  // 보이는 학생
  function solution(arr) {
    let answer = 1;
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        answer++;
        max = arr[i];
      }
    }
    return answer;
  }
  let arr = [130, 135, 148, 140, 145, 150, 150, 153];
  console.log(solution(arr));
}
{
  // 가위바위보
  // 1: 가위, 2: 바위, 3: 보, 비길 경우 D를 출력
  function solution(a, b) {
    let answer = '';
    for (let i = 0; i < a.length; i++) {
      if (a[i] === b[i]) answer += 'D';
      else if (a[i] === 1 && b[i] === 3) answer += 'A';
      else if (a[i] === 2 && b[i] === 1) answer += 'A';
      else if (a[i] === 3 && b[i] === 2) answer += 'A';
      else answer += 'B';
    }

    return answer;
  }
  let a = [2, 3, 3, 1, 3];
  let b = [1, 1, 2, 2, 3];
  console.log(solution(a, b));
}
{
  // 점수 계산
  function solution(arr) {
    let answer;
    return answer;
  }
  // console.log(solution(arr));
}
{
  // 등수구하기
  function solution(arr) {
    let answer;
    return answer;
  }
  // console.log(solution(arr));
}
{
  // 격자판 최대합
  function solution(arr) {
    let answer;
    return answer;
  }
  // console.log(solution(arr));
}
{
  // 봉우리
  function solution(arr) {
    let answer;
    return answer;
  }
  // console.log(solution(arr));
}
