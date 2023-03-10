/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/


// Взял свою функцию из задания 9 по определению является ли число простым 
// Буду делать так - идти по числовому ряду от 2 до n, если на пути поймаю простое число (с помощью моей функии из 9-го задания) буду толкать число в массив
function isPrime(n) {
    if (n < 2) {
      return false;
    } else if (n == 2) {
      return true;
    }
    let i = 2;
    const maxNum = Math.sqrt(n);
    while (i <= maxNum) {
      if (n % i == 0) {
        return false;}
      i++;
    }
    return true;
  }
  

function primes(num) {
    const arrNumbers = []; // Создаем контейнер под простые числа
    for (i = 2; i <= num; i++) { // Опять идем от двойки до n
        if (isPrime(i)) {  // Функция из задания 9 ловит простое число
        arrNumbers.push(i); // если поймала - толкает в контейнер 
        }
    }
    return arrNumbers;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]