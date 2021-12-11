// ✅ 문제 다시 풀어보기

{
  // forEach, map, filter, reduce
  a = [10, 11, 12, 13, 14, 15];

  // a.forEach((v, i) => console.log(v, i)); // v: 배열의 요소, i: 인덱스 번호

  let answer2 = a.map((v, i) => v * v);
  // console.log(answer2); // [ 100, 121, 144, 169, 196, 225 ]

  let answer3 = a.filter((v, i) => v % 2 === 1);
  // console.log(answer3); // [ 11, 13, 15 ]

  let answer4 = a.reduce((acc, v) => acc + v);
  // console.log(answer4); // 75
}

{
  // 세 수 중 최솟값 (정렬을 사용하면 안됨)
  function solution(a, b, c) {
    let answer;
    if (a < b) {
      answer = a;
    } else {
      answer = b;
    }

    if (c < answer) answer = c;
    return answer;
  }
  console.log(solution(6, 5, 11));
}

{
  // 삼각형 판별하기 (a, b, c 크기 비교해서 큰 수 max로 초기화 -> (a+b+c) - max <= max ? "No" : "YES" )
  function solution(a, b, c) {
    let answer = "YES",
      max;
    let sum = a + b + c;

    if (a > b) max = a;
    else max = b;
    if (c > max) max = c;
    if (sum - max <= max) answer = "NO";

    return answer;
  }
  console.log(solution(13, 33, 17));
}

{
  // 연필 개수 (1 다스는 12자루 -> 25명 / 12 = 2, 1명 주려면 1다스 추가 -> 3다스 필요하므로 나머지가 있으면 올림 -> Math.ceil() 사용)
  // Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
  function solution(n) {
    let answer = Math.ceil(n / 12);

    return answer;
  }
  console.log(solution(178));
}
console.clear();
{
  // 1부터 N까지 합 출력하기 (answer = 0으로 초기화 -> 반복문 이용해서 answer에 n만큼 i를 더해주기)
  function solution(n) {
    let answer = 0;
    for (let i = 0; i <= n; i++) {
      answer = answer + i;
    }

    return answer;
  }
  console.log(solution(10));
}

{
  // 최솟값 구하기 (1. arr 정렬 후 첫 번째 인덱스 값 리턴)
  function solution(arr) {
    let answer = arr.sort((a, b) => a - b);
    return answer[0];
  }
  arr = [5, 3, 7, 11, 2, 15, 17];
  console.log(solution(arr));
}
{
  // 2. 내장함수 사용 Math.min()
  function solution(arr) {
    let answer = Math.min(...arr);
    return answer;
  }
  arr = [4, 9, 7, 11, 23, 15, 17];
  console.log(solution(arr));
}
{
  // 3. min = 제일 큰 수로 초기화 -> 반복문 이용해서 arr[i]<min 참이면 min = arr[i]
  function solution(arr) {
    let answer,
      min = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) min = arr[i];
    }

    answer = min;
    return answer;
  }
  arr = [5, 20, 7, 11, 8, 15, 17];
  console.log(solution(arr));
}
console.clear();
{
  // 홀수 (answer = [])
  // (min = Number.MAX_SAFE_INTEGER -> sum = 0 -> oddNum % 2 === 1 ? sum += oddNum -> oddNum<min ? min = oddNum -> push하기)
  function solution(arr) {
    let answer = [];
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;

    for (let oddNum of arr) {
      if (oddNum % 2 === 1) {
        sum += oddNum;
        if (oddNum < min) min = oddNum;
      }
    }
    answer.push(sum);
    answer.push(min);
    return answer;
  }
  arr = [12, 77, 38, 41, 53, 92, 85];
  console.log(solution(arr));
}

{
  // 10부제 (arr[i] % 10 === day ? answer++)
  function solution(day, arr) {
    let answer = 0;
    for (let carNum of arr) {
      if (carNum % 10 === day) answer++;
    }
    return answer;
  }
  arr = [25, 23, 11, 47, 53, 17, 33];
  console.log(solution(3, arr));

  // arr = [12, 20, 54, 30, 87, 91, 30];
  // console.log(solution(0, arr));
}
{
  // filter() 이용한 풀이
  function solution(day, arr) {
    // let answer = arr.filter((carNum) => carNum % 10 === day);
    // return answer.length;
  }
  arr = [25, 23, 13, 47, 53, 17, 33];
  console.log(solution(3, arr));
}
console.clear();
{
  // 일곱 난쟁이
  function solution(arr) {
    let answer = arr;
    let sum = arr.reduce((a, b) => a + b, 0);
    for (let i = 0; i < 8; i++) {
      for (let j = i; j < 9; j++) {
        if ((sum = arr[i] + arr[j] === 100)) {
          arr.splice(j, 1);
          arr.splice(i, i);
        }
      }
    }

    return answer;
  }

  let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
  console.log(solution(arr));
}

{
  // A를 #으로
  function solution(s) {
    let answer = "";
    for (let x of s) {
      if (x === "A") answer += "#";
      else answer += x;
    }

    return answer;
  }

  // 정규식 이용
  function solution2(s) {
    let answer = s;
    answer = answer.replace(/A/g, "#");

    return answer;
  }

  let str = "BANANA";
  console.log(solution(str));
  console.log(solution2(str));
}
console.clear();
{
  // 문자 찾기
  function solution(s, t) {
    let answer = 0;
    for (let x of s) {
      if (x === t) answer++;
    }

    return answer;
  }

  let str = "COMPUTERPROGRAMMING";
  console.log(solution(str, "R"));

  function solution2(s, t) {
    let answer = s.split(t).length;
    return answer - 1;
  }

  let str2 = "COMPUTERPROGRAMMING";
  console.log(solution2(str2, "R"));
}

{
  // 대문자 찾기
  function solution(s) {
    let answer = 0;
    for (let x of s) {
      // 1
      // if (x === x.toUpperCase()) answer++;

      // 2 (아스키넘버로 풀어보기 -> 소문자: 97~122, 대문자: 65~90)
      let num = x.charCodeAt();
      if (num >= 65 && num <= 90) answer++;
    }

    return answer;
  }

  let str = "KoreaTimeGood";
  console.log(solution(str));
}
console.clear();
{
  // 대문자로 통일
}
{
  // 대소문자 변환
}
{
  // 가장 긴 문자열
}
{
  // 가운데 문자 출력
}
{
  // 중복문자제거(indexOf)
}
{
  // 중복단어제거
}
