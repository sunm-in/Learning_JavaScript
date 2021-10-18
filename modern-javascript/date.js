// Date

{
  // new date()
  new Date(); // 2021-10-13T04:36:22.733Z

  // new 연산자 없이 호출하면 Date 객체를 반환하지 않고 날짜와 시간 정보를 나타내는 문자열을 반환한다.
  Date(); // Wed Oct 13 2021 13:37:41 GMT+0900 (대한민국 표준시)
}

{
  // new Date(milliseconds)
  // 한국 표준시 KST는 협정 세계시 UTC에 9시간을 더한 시간이다.
  let date = new Date(0);
  console.log(date); // 1970-01-01T00:00:00.000Z

  let date2 = new Date(86400000);
  console.log(date2); // 1970-01-02T00:00:00.000Z
}

console.clear();

{
  // new Date(dateString)
  let date = new Date('May 26, 2020 10:00:00');
  console.log(date); // 2020-05-26T01:00:00.000Z

  let date2 = new Date('2020/03/26/10:00:00');
  console.log(date2); // 2020-03-26T01:00:00.000Z
}
