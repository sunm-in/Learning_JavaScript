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
  // (1) 점수 계산
  function solution(arr) {
    let answer = 0;
    let cnt = 0;
    for (const x of arr) {
      if (x === 1) {
        cnt++;
        answer += cnt;
      } else cnt = 0;
    }
    return answer;
  }
  let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
  console.log(solution(arr));
}
{
  // (2) 점수 계산
  function solution(arr) {
    let answer = 0;
    const score = arr.join('').split(0);
    // console.log(arr.join('')); // 1011100110
    // console.log(arr.join('').split(0)); // [ '1', '111', '', '11', '' ]

    for (const x of score) {
      if (x) {
        // console.log(x.length); // 1 3 2
        answer += (x.length * (x.length + 1)) / 2;
      }
    }
    return answer;
  }
  let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
  console.log(solution(arr));
}
console.clear();
{
  // 등수구하기
  function solution(arr) {
    let n = arr.length;
    let answer = Array.from({ length: n }, () => 1); // [1, 1, 1, 1, 1]
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (arr[i] < arr[j]) answer[i]++;
      }
    }

    return answer;
  }
  let arr = [87, 89, 92, 100, 76];
  console.log(solution(arr));
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
