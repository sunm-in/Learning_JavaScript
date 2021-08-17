// async & await
// clear style of using promise 깔끔하게 promise를 사용하는 법

// 1. async
async function fetchUser() {
  // do network reqeust in 10 secs....
  return 'sunmin';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  // return getApple().then((apple) => {
  //   return getBanana().then((banana) => `${apple} + ${banana}`);
  // });
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
  // all() -> 프로미스 배열을 전달하게 되면 모든 프로미스들이 병렬적으로 다 받을 때까지 모아준다.
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);
