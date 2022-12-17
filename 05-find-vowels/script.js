/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']; // нужен массив для проверки 

function findVowels(str) {
    str = str.toLowerCase(); // снимаю влияние регистра 
    str = str.split(''); // строку разбиваю в массив // будем идти по одному массиву и искать совпадения в другом, совпадения будем считать
    let count = 0;
    str.forEach(function(item) /*пербираем элементы строки*/ {
        if(vowels.indexOf(item) !== -1) /* каждый элемент строки сверяем с масивом vowels если не -1 увеличиваем счетчик*/ {
            count++;} /* если есть совпадение (indexOF !== -1) увеличиваем счетчик на единицу */
    });
    return count;
    };
// Признаться честно долго мутил ... намутил так, что в итоге получилось, но на всякий случай сам себе еще раз прописал последовательность действий
// иначе через три дня не вспомню чего НАМУТИЛ :)
// подозреваю, что есть решения поинтереснее, но исхожу из того, что лучшее - враг ХОРОШЕГО

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3
console.log(findVowels('ААаероплаЕЕн')) // сделал для проверки повторения гласных и разные регистры // все верно 8