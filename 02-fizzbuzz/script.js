/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

// function fizzBuzz(num) {
//     // Напишите код здесь
// }

// Протестируйте решение, вызывая функцию с разными аргументами:



  function fizzBuzz(num) {
    // Напишите код здесь
    const wordSecond = 'buzz';
    const wordFirst = 'fizz';
    let n = 0; /* исправлено по замечанию ревьюера - Нужно объявлять переменные через const, а если она перезаписывается, то через let */
    while (n < num ) {
      n++
      if (n % 3 == 0 && n % 5 == 0){console.log(wordFirst+wordSecond);}
      else if (n % 5 == 0){console.log(wordSecond);}
      else if (n % 3 == 0){console.log(wordFirst);} 
      else {console.log(n);};
    };
    
  };


console.log(fizzBuzz(15)); 