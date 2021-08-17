// Callback Hell example
class UserStorage {
  // 1. id, password 입력
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      // 2. login
      setTimeout(() => {
        if (
          (id === 'sunmin' && password === 'sunm') ||
          (id === 'coder' && password === 'code')
        ) {
          resolve(id); // 3. login한 id 받아온다. 받아온 id를 이용해서 Roles 요청
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    });
  }

  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'sunmin') {
          resolve({ name: 'sunmin', role: 'admin' }); // 4. 역할이 성공적으로 받아와지면 사용자의 object 출력
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    });
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
  .loginUser(id, password)
  .then(userStorage.getRoles)
  .then((user) => alert(`Hello ${user.name}, you have a ${user.role} role`))
  .catch(console.log);
