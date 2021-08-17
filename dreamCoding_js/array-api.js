// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(); // 원하는 구분자를 넣어준다. 빈 값이면 자동으로 ','로 구분해준다.
  console.log(result); // apple,banana,orange
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(','); // string.split(separator, limit)
  // 문자열을 'separator'로 잘라서 'limit'이하의 배열에 잘라진 문자열을 저장하여 리턴한다.
  // separator -> 필수x, 문자열을 잘라 줄 구분자, 값이 입력되지 않으면 문자열 전체를 배열에 담아서 리턴한다.
  // limit -> 필수x, 최대 분할 갯수
  console.log(result); // ["🍎, 🥝, 🍌, 🍒"]
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result); // [5, 4, 3, 2, 1]
  // 주의 ! 배열 자체를 변화시킨다.
  // console.log(array); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements 처음 두 요소 없이 새 배열 만들기
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // arr.slice(start, end) 배열에서 원하는 부분만 리턴할 때 사용
  // 잘라낸 원소들로 만든 새로운 배열을 리턴
  // start -> 잘라낼 배열의 시작 index
  // end -> 잘라낼 배열의 종료 index
  console.log(result); // [3, 4, 5]
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result = students.find((student) => student.score === 90);
  console.log(result);
  // find() 배열에서 특정 값을 찾는 조건을 callback 함수를 통해 전달
  // 조건에 맞는 값 중 첫번째 값을 리턴
  // 만약 배열에 조건을 만족하는 값이 없으면 undefined를 리턴한다.
}

// Q6. make an array of enrolled students
{
  const result = students.filter((student) => student.enrolled);
  // filter() 콜백 함수에 지정된 조건을 충족하는 배열의 요소를 반환
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map((student) => student.score);
  // 배열 안에 들어있는 요소 하나하나를 다른 것으로 변환해준다.
  console.log(result); // [45, 80, 90, 66, 88]
}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  // 지정된 콜백 함수가 배열 요소에 대해 true를 반환하는지 여부를 결정
  // 배열 중에 어떤 것이라도 하나 만족되는 것이 있는지 없는지 검사할 때는 some 사용
  console.log(result);

  // 모든 배열이 만족해야할 때는 every 사용
}
console.clear();
// Q9. compute students' average score
{
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  // reduce() => 배열에 있는 모든 요소들의 값을 누적해야 하는 상황에서 사용
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result = students
    .map((student) => student.score)
    // .filter((score) => score >= 50)
    .join();
  console.log(result);
}
console.clear();
// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}
