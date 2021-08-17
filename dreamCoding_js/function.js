'use strict';
// Function
// - fundamental building block in the program
// - subprogram can be used multiple times 여러번 재사용이 가능하다는 장점이 있다.
// - performs a task or calculates a value 대체적으로 한가지의 작업을 하거나 값을 계산할 때 사용

// 1. Function declaration
// function name(param1, param2) { body... return; }
// onde function === one thing 하나의 함수는 한가지 일만 하도록 한다.
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS 함수를 변수에 할당할 수 있고, 파라미터로 전달이 되고, 함수를 리턴할 수 있다.
function printHello() {
  console.log('Hello');
}
printHello();

function log(message) {
  // 자바스크립트에서는 타입이 없기 때문에 string인지 number인지 명확하지 않다.
  console.log(message);
}
log('Hello@');
log(1234);
// TypeScript
// 규모가 큰 프로젝트를 하거나, 현업에서 다양한 개발자들과 일을 하거나
// 작성한 것을 나중에 라이브러리 형태로 api를 제공해야 될 때
// 타입스크립트를 쓰는 것이 좀 더 명확하고 개발을 더 쉽게 해준다.
// function log(message: string): number {
//   console.log(message);
//   return 0;
// }

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
  obj.name = 'coder';
}
const sunmin = { name: 'sunmin' };
changeName(sunmin);
console.log(sunmin);

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // 간단한 방법
  for (const arg of args) {
    console.log(arg);
  }

  // 더 간단한 방법
  args.forEach((arg) => console.log(arg));
}
printAll('aaaa', 'bbbb', 'cccc'); // 3개의 값이 배열 형태로 담겨져서 전달

// 5. Local scope -> 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; // global variable
function printMessage() {
  let message = 'hello'; // 지역 변수 (안에서만 접근 가능, 밖에서 호출 시 에러)
  console.log(message); // local variable
  console.log(globalMessage);
  function printAnother() {
    console.log(message);
    let childMessage = 'hello';
  }
  // console.log(childMessage); 에러
}
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // 블록 안에서 많은 로직을 작성하면 가독성이 떨어진다.
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    // 조건이 맞지 않는 경우에 빠르게 return 후 필요한 로직을 짜는게 좋다.
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable 변수에 할당
// can be passed as an argument to other functions. function에 파라미터로 전달
// can be returned by another function 리턴값으로도 리턴 가능

// 1. Function expression
// a function declaration can be called earlier than it is defiend. (hoisted)
// a function expression is created when the execution reaches it.

// function declaration과 function expression 큰 차이점
// function expression -> 할당된 다음부터 호출 가능
// function declaration -> 함수가 선언되기 이전에 호출이 가능

const print = function () {
  // 함수에 이름이 없는 것 -> anonymous function
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
// 함수를 전달해서 상황에 맞게 전달해주는 것을 callback function이라 한다.
function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes();
  } else {
    printNo();
  }
}

// 이름이 없는 anonymous function
const printYes = function () {
  console.log('yes!');
};

// 이름이 있는 named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log('simplePrint!');
};

//  Arrow function을 사용 시 더욱 간결하게 작성 가능
// const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE: Immediately Invoked Function Expression
(function hello() {
  // console.log(IIFE);
})(); // 바로 함수 호출이 가능하다. 잘 안쓰임

// Fun quiz time
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
    case 'multiply':
      return a * b;
    case 'remainder':
      return a % b;
    default:
      throw Error('unkonwn command');
  }
}
console.log(calculate('add', 2, 3));
