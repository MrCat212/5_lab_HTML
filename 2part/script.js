// Задача 2
// Посчитать максимум и минимум массива

// const arr = [1, 6, -1, 22, 13];

// const max = Math.max(...arr);
// const min = Math.min(...arr);

// console.log(`Максимум: ${max}`);
// console.log(`Минимум: ${min}`);


// Перевернуть строку задом наперёд

// const str = "!тевирП";
// const reversedStr = str.split('').reverse().join('');

// console.log(reversedStr);


//Вычислить сумму квадратных корней для всех чётных чисел целочисленного массива

// const arr = [3, 5, 8, 13, 21, 42];

// // Функция для проверки чётности числа
// function isEven(number) {
//     return number % 2 === 0;
// }

// function squareRoot(number) {
//     return Math.sqrt(number);
// }

// arr.forEach(number => {
//     if (isEven(number)) {
//         const sqrt = squareRoot(number);
//         console.log(`Квадратный корень из ${number} равен ${sqrt}`);
//     }
// });


//Написать функцию, которая проверяет, являются ли две строки анаграммой

// function normalizeString(str) {
//     return str.toLowerCase().replace(/\s/g, '');
// }

// function isAnagram(str1, str2) {
//     const normalizedStr1 = normalizeString(str1);
//     const normalizedStr2 = normalizeString(str2);

//     // Если длины строк разные, то они не могут быть анаграммами :)
//     if (normalizedStr1.length !== normalizedStr2.length) {
//         return `Слова "${str1}" и "${str2}" не являются анаграммой`;
//     }

//     const sortedStr1 = normalizedStr1.split('').sort().join('');
//     const sortedStr2 = normalizedStr2.split('').sort().join('');

//     return sortedStr1 === sortedStr2
//         ? `Слова "${str1}" и "${str2}" являются анаграммой`
//         : `Слова "${str1}" и "${str2}" не являются анаграммой`;
// }

// console.log(isAnagram("Лунь", "нуль"));
// console.log(isAnagram("Лунь", "ноль"));

//Написать функцию, которая проверяет, является ли строка палиндромом

// function isPalindrome(str) {

//     const normalizedStr = str.replace(/\s/g, '').toLowerCase();

//     const reversedStr = normalizedStr.split('').reverse().join('');

//     const isPalindromic = normalizedStr === reversedStr;

//     return `Строка "${str}" ${isPalindromic ? 'является' : 'не является'} палиндромом`;
// }

// console.log(isPalindrome("Не гни папин ген"));
// console.log(isPalindrome("123"));

// Написать функцию, которая после вызова каждую секунду пишет в консоль очередное число Фибоначчи. Так, в консоли будет: 0, 1, 1, 2, 3, 5, 8, 13...

// function fibonacciGenerator() {
//     let a = 0;
//     let b = 1;

//     return function () {
//         const result = a;
//         [a, b] = [b, a + b];
//         return result;
//     };
// }

// const generateFibonacci = fibonacciGenerator();

// const intervalId = setInterval(() => {
//     const nextFibonacciNumber = generateFibonacci();
//     console.log(nextFibonacciNumber);

//     if (nextFibonacciNumber > 1000) {
//         clearInterval(intervalId);
//     }
// }, 1000);


// Написать функцию delay(N), возвращающую промис, который сделает resolve() через N секунд.

// function delay(seconds) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, seconds * 1000);
//     });
// }

// console.log('Начало');
// delay(3).then(() => {
//     console.log('Прошло 3 секунды');
// });
// delay(6).then(() => {
//     console.log('Прошло 6 секунды');
// });
// delay(10).then(() => {
//     console.log('Прошло 10 секунды');
// });


//Написать функцию intersect(arrA, arrB), принимающую на вход два массива и возвращающую пересечение значений этих массивов.

// function intersect(arrA, arrB) {
//     const setA = new Set(arrA);
//     const setB = new Set(arrB);
//     const intersection = [];

//     for (const value of setA) {
//         if (setB.has(value)) {
//             intersection.push(value);
//         }
//     }

//     return intersection;
// }


// const array1 = [1, 2, 3, 4, 5];
// const array2 = [3, 4, 5, 6, 7];
// const result = intersect(array1, array2);
// console.log(result);


// Что выведет этот код? Как сделать так, чтобы он вывел 1, 2, 3?
// Этот код выведет 4, 4, 4, так как console.log(i) будет выполнено после завершения цикла for, и в этот момент i будет равно 4.

// for (let i = 1; i <= 3; i++) {
//     setTimeout(() => console.log(i), 1000);
//   }

// Написать HTML и JS-код, который рисует кнопки "+" и "-" и значение, уменьшающееся или увеличивающееся при нажатии. (Код находится в html файле)