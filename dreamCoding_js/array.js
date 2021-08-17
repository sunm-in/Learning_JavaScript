'use strict';
// 비슷한 (타입)종류들의 데이터(object)들을 묶어서 보관 -> 자료구조
// 다른 언어에서는 동일한 타입의 데이터들만 담을 수 있지만
// 자바스크립트는 dynamically typed language 타입이 동적으로 정의되기 떄문에 가능하다.

// 배열은 index가 지정되어 있는데 0부터 시작한다. 프로그래밍 언어에서 인덱스는 0부터 시작

// Array
// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position 인덱스를 통해서 배열에 접근하기
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍎
console.log(fruits[1]); // 🍌
console.log(fruits[2]); // undefined

// 배열에 마지막 요소를 가져올 때
console.log(fruits[fruits.length - 1]); // 🍌

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 배열 안에 들어있는 값마다 콜백함수를 수행한다.
// 콜백함수에는 세 가지 인자가 들어간다. value, index, array
// fruits.forEach(function (fruit, index, array) {
//   console.log(fruit, index, array);
// });
fruits.forEach((fruit) => console.log(fruit));

// 4. addtion, deletion, copy
// push: add an item to the end 마지막에 데이터 추가하기
fruits.push('🍓', '🍇');
console.log(fruits);

// pop: remove an item from the end 마지막에 있는 데이터 제거하기
fruits.pop();
fruits.pop();
console.log(fruits);

// 앞에서 추가하고 제거하기
// unshift: add an item to the benigging
fruits.unshift('🍋', '🍉');
console.log(fruits);

// shift: remove an item from the benigging
fruits.shift();
fruits.shift();
console.log(fruits);

// note! shift, unshift are slower than pop, push
// shift, unshift 보다는 push와 pop을 사용하는 것이 좋다.
// 배열 전체의 데이터가 움직이면서 데이터를 넣고 뺴는 행위는 굉장히 느릴수밖에 없다.

// splice: remove an item by index position
fruits.push('🍇', '🍉', '🍋');
console.log(fruits);
fruits.splice(1, 1); // 원하는 index 지정, 몇개 지우고 싶은지 지정
console.log(fruits);
fruits.splice(1, 1, '🫐', '🍐'); // 지우고나서 원하는 데이터 넣기
console.log(fruits);

// combine two arrays 두가지의 배열을 묶어서 만들기
const fruits2 = ['🍏', '🍍'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.indexOf('🍉')); // 3
console.log(fruits.indexOf('🍍')); // -1 배열 안에 해당하는 값이 없으면 -1을 출력한다.

// includes
console.log(fruits.includes('🍉')); // true
console.log(fruits.includes('🍍')); // false

// lastIndexOf
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎')); // 0
console.log(fruits.lastIndexOf('🍎')); // 5
