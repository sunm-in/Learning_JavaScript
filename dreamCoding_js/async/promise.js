'use strict';

// Promise is a JavsScript object for asynchronous operation
// 자바스크립트 안에 내장되어 있는 Object, 비동기적인 것을 수행할 때 callback함수 대신에 사용
// state: pending -> fulfilled or rejected
// Producer vs Consumer

// Promise 만들기
// 1. Producer
// when new Promis is created, the executor runs automatically. 새로운 프로미스가 만들어질때는 우리가 전달한 함수가 자동적으로 실행된다.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log('doing something...');
  setTimeout(() => {
    resolve('sunmin');
    // reject(new Error('no network'));
  }, 2000);
});

// Promise 사용하기
// 2. Consumers: then, catch, finally
promise //
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('finally');
  });

// Promise 연결하기
// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. 오류를 잘 처리 하자
// Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

// getHen()
//   .then((hen) => getEgg(hen))
//   .then((egg) => cook(egg))
//   .then((meal) => console.log(meal));

// 한가지만 받아서 그대로 전달하는 경우 생략 가능
getHen() //
  .then(getEgg)
  .catch((error) => {
    return '🥖';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
