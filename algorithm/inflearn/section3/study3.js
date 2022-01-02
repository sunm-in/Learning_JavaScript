{
  // 회문문자열
  function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase();
    let n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
      if (s[i] != s[n - i - 1]) return 'NO';
    }
    return answer;
  }

  let str = 'goooG';
  console.log(solution(str));
}
{
  // 유효한 팰린드롬
  function solution(s) {
    let answer = 'YES';
    s = s.toLowerCase().replace(/[^a-z]/g, ''); // 소문자가 아닌 것은 빈 문자열로 변환
    if (s.split('').reverse().join('') !== s) return 'NO';
    return answer;
  }

  let str = 'found7, time: study; Yduts; emit, 7Dnuof';
  console.log(solution(str));
}
{
  // 숫자만 추출
}
{
  // 가장 짧은 문자거리
}
{
  // 문자열 압축
}
