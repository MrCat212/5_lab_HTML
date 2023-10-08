// Задача 1
// Написать функцию counter(n), которая выводит в консоль раз в секунду числа n, n-1 ... 2, 1, 0 и останавливается.

// function counter(n) {
//     let current = n;

//     const intervalId = setInterval(function() {
//         console.log(current);

//         if (current === 0) {
//             clearInterval(intervalId);
//         } else {
//             current--;
//         }
//     }, 1000); // 1000 миллисекунд (1 секунда)
// }

// counter(10);



// Написать функцию createCounter(n), возвращающую объект с методами:
// start() -- запускает (или возобновляет) счётчик c интервалом 1 секунда: N, N-1.
// pause() -- приостанавливает счёт, но не сбрасывает счётчик.
// stop() -- останавливает счёт, сбрасывает счётчик.


// function createCounter(n) {
//     let current = n;
//     let intervalId = null;
//     let isPaused = false;

//     function countDown() {
//         if (!isPaused) {
//             console.log(current);

//             if (current === 0) {
//                 clearInterval(intervalId);
//             } else {
//                 current--;
//             }
//         }
//     }

//     return {
//         start: function() {
//             if (!intervalId) {
//                 console.log(current);
//                 intervalId = setInterval(countDown, 1000);
//             }
//         },
//         pause: function() {
//             isPaused = true;
//             setTimeout(() => {
//                 isPaused = false;
//             }, 10000);
//         }
//     };
// }


// const counter = createCounter(10);

// // Запускает счетчик
// counter.start();

// // Ждет, пока счетчик досчитает до 6, затем остановит отсчёт (поставит на паузу) на 10 секунд и после 10 секунд продолжит отсчёт
// setTimeout(() => {
//     counter.pause();
// }, 5000);


// setTimeout(() => {
//     counter.start();
// }, 10000);


// function createCounter(n) {
//     let current = n;
//     let intervalId = null;

//     function countDown() {
//         console.log(current);

//         if (current === 0) {
//             clearInterval(intervalId);
//         } else {
//             current--;
//         }
//     }

//     return {
//         start: function() {
//             if (!intervalId) {
//                 console.log(current);
//                 intervalId = setInterval(countDown, 1000);
//             }
//         },
//         stop: function() {
//             clearInterval(intervalId);
//             intervalId = null;
//             current = n;
//         }
//     };
// }


// const counter = createCounter(10);

// counter.start();

// counter.stop();

// counter.start();


// Задача 2
// Решить задачу со счётчиком N, N-1 ... 2, 1, 0 через функцию delay.

// function delayCounter(n) {
//     function countDown() {
//         console.log(n);
//         if (n > 0) {
//             n--;
//             setTimeout(countDown, 1000); // Задержка 1 секунда
//         }
//     }

//     countDown();
// }

// delayCounter(10);


// Написать функцию, возвращающую название первого репозитория на github.com по имени пользователя (2 последовательных запроса: https://api.github.com/users/%USERNAME%).

// function getFirstGitHubRepo(username) {

//     fetch(`https://api.github.com/users/${username}`)
//         .then(response => response.json())
//         .then(userData => {
//             // Получаение имени первого репозитория пользователя
//             const firstRepoName = userData.repos_url;

//             fetch(firstRepoName)
//                 .then(response => response.json())
//                 .then(repoData => {
//                     console.log(`Первый репозиторий пользователя ${username}: ${repoData[0].name}`);
//                 })
//                 .catch(error => {
//                     console.error('Ошибка при получении информации о первом репозитории:', error);
//                 });
//         })
//         .catch(error => {
//             console.error('Ошибка при получении информации о пользователе:', error);
//         });
// }


// getFirstGitHubRepo('MrCat212'); // Самый первый репозиторий пользователя "MrCat212"


// Задача 3
// Перепишите, используя async/await вместо .then/catch.
// В функции getGithubUser замените рекурсию на цикл, используя async/await.

// class HttpError extends Error {
//     constructor(response) {
//       super(`${response.status} for ${response.url}`);
//       this.name = 'HttpError';
//       this.response = response;
//     }
//   }
  
//   async function loadJson(url) {
//     const response = await fetch(url);
  
//     if (response.status == 200) {
//       return await response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   }
  
//   async function getGithubUser() {
//     let name;
//     do {
//       name = prompt("Введите логин?", "iliakan");
//       try {
//         const user = await loadJson(`https://api.github.com/users/${name}`);
//         alert(`Полное имя: ${user.name}.`);
//         return user;
//       } catch (err) {
//         if (err instanceof HttpError && err.response.status == 404) {
//           alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
//         } else {
//           throw err;
//         }
//       }
//     } while (true);
//   }
  
//   getGithubUser();
  