// 1. Use strict
// whole-script strict mode syntax
// 자바스크립트는 유연한 언어다.
// flexible === dangerous 유연하다는것은 때로는 아주 위험하다.
// added ADDED ECMAScript 5
// 바닐라자바스크립트로 개발할 때 strict모드로 더 상식적인 범위 안에서 자바스크립트를 사용할 수 있다.
'use strict'; // TypeScript를 쓸 땐 선언 x

// 2. Variable, rw(read/write) 메모리의 값을 읽고 쓰는게 가능
// 2-1 let (added in ES6)
let globalName = 'global name';

{
  let Name = 'sunmin';
  console.log(Name);
  Name = 'Hello';
  console.log(Name);
  console.log(globalName);
}
// console.log(Name);
console.log(globalName);

// 2-2 var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// 어디에서 선언했는지 상관없이 항상 제일 위로 선언을 끌어 올려준다.
// has no block scope
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only) 읽기만 가능
// use const whenever possible. 변수의 값이 바뀔 이유가 없다면 const 사용하기
// only use let if variable needs yo change.
// 한번 할당하면 값이 절대 바뀌지 않는다.

const daysInWeek = 7;
const maxNumber = 5;

// Note
// Immutavle data type: premitive types, frozen objects (i.e. object.freeze()) 데이터 자체를 절대 변경 불가
// Mutable data types: all objects by default are mutable in JS 변경이 가능한 데이터 타입 -> objects
// favor immutable data type always for a reasons:
// - security 보안상의 이유
// - thread safety 동시에 값을 변경한다는건 위험한 것
// - reduce human mistakes 실수 방지

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`); // value: 17, type: number
console.log(`value: ${size}, type: ${typeof size}`); // value: 17.1, type: number

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN

// bigInt (fairly new, don't use it yet)
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
// value: 1234567890123456789012345678901234567890, type: bigint  일부 브라우저에서 지원이 안됨
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요하거나 우선순위를 주고 싶을 때 쓰여진다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const sunmin = { name: 'sunmin', age: 20 };
console.log(sunmin); // { name: 'sunmin', age: 20 }
sunmin.age = 22;
console.log(sunmin); // { name: 'sunmin', age: 22 }

// 5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
