'use strict';
// 동기와 비동기
// JavaScript is synchronous.
// Execute the code block by orger after hoistiog.
// hoisting 된 이후부터 코드가 작성한 순서대로 하나하나씩 동기적으로 실행된다.
// hoisting: var, function declaration 선언들이 자동적으로 제일 위로 올라가는 것.
console.log('1');
setTimeout(() => console.log('2'), 1000); // 1초 후에 블록 안에 코드를 실행
console.log('3');

// Synchronous callback 즉각적으로 동기적으로 실행
function printImmediately(print) {
  print();
}
printImmediately(() => console.log('hello'));

// Asynchronous callback  언제 실행될 지 예측할 수 없다.
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage {
  // 1. id, password 입력
  loginUser(id, password, onSuccess, onError) {
    // 2. login
    setTimeout(() => {
      if (
        (id === 'sunmin' && password === 'sunm') ||
        (id === 'coder' && password === 'code')
      ) {
        onSuccess(id); // 3. login한 id 받아온다. 받아온 id를 이용해서 Roles 요청
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'sunmin') {
        onSuccess({ name: 'sunmin', role: 'admin' }); // 4. 역할이 성공적으로 받아와지면 사용자의 object 출력
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);

// 콜백 체인의 문제점
// 1. 가독성이 떨어진다.
// 2. 디버깅하고 문제를 분석하기 어렵고 유지보수도 어렵다.
