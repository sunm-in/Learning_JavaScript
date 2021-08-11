'use strict';
// 1. String concatenation
console.log('my' + 'cat'); // + 기호를 사용해서 문자열을 합칠 수 있다.
console.log('1' + 2); // 숫자가 문자열로 변환되어 합쳐진다.
console.log(`string literals: 
1 + 2 = ${1 + 2}`); // 백틱 기호를 활용해서 변수값을 계산해서 string으로 포함해서 문자열로 만든다.
console.log("sunmin's \n\tbook"); // 줄바꿈, \t\ 탭

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`); // 3, 3

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`); // 3, 4

const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`); // 3, 3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`); // 3, 2

// 4. Assignment operators
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y;
x *= y;
x /= y;

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`);
// expression이나 함수로 호출하는 것들은 제일 뒤에 배치하는것이 효율적이다.

// && (and), finds the first falsy value
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress logn if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    // wasting time
    console.log('🤯');
  }
  return true;
}

// ! (not)
console.log(!value1); // false

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
// 웬만하면 === 사용하기
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

// object equality by reference
const sunmin1 = { name: 'sunmin' };
const sunmin2 = { name: 'sunmin' };
const sunmin3 = sunmin1;
console.log(sunmin1 == sunmin2); // false
console.log(sunmin1 === sunmin2); // false
console.log(sunmin1 === sunmin3); // true

// equlity - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

// 8. Conditional operators: if
// if, else if, else
const name = 'sunmin';
if (name === 'sunmin') {
  console.log('Welcome, sunmin');
} else if (name === 'coder') {
  console.log('You are amazing coder');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'sunmin' ? 'yes' : 'no');

// Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Firefox':
    console.log('love you!');
    break;
  default:
    console.log('same all!');
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the ocndition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
// 블록을 먼저 실행하고 싶다면 do while문
// 조건문이 맞을때만 블록을 실행하고 싶다면 while문 쓰기

// for loop, for (begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`q1: ${i}`);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(`q2: ${i}`);
}
