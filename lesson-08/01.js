/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// function capitalizeWords(str){
//   if (!str || typeof str !== 'string') return str;
//
//   let result = '';
//   let capitalizeNext = true;
//
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//
//     if (char === ' ') {
//       result += char;
//       capitalizeNext = true;
//     } else if (capitalizeNext) {
//       result += char.toUpperCase();
//       capitalizeNext = false;
//     } else {
//       result += char.toLowerCase();
//     }
//   }
//
//   return result;
// }
//
// console.log(capitalizeWords("hello world from javascript"))

// вар2
// function capitalizeWords(str) {
//   return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }
// console.log(capitalizeWords("hello world from javascript"))