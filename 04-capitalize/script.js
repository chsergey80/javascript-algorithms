/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    str = str.toLowerCase(); // в задаче нет, но мне показалось, что так лучше
    str = str.split(' ');
    str = str.filter(function(item){
      return item !== '';
     });
    str = str.filter(function(item){
      return item !== ' ';
    });
    str = str.map(function(item){
    item = item.trim();
    return item[0].toUpperCase() + item.slice(1);
    });
    str = str.join(' ');
    return str;
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"
console.log(capitalize('  МолоДость   всё   просТит          '));
console.log(capitalize(''));
console.log(capitalize(' '));