// 1. створити функцію, яка якщо приймає один аргумент, просто виводить його, якщо два аргументи - складає або конкатенує їх між собою.
// function arr(a, b) {
//     if (b !==undefined) {
//         let ab = a + b;
//         console.log(ab)
//     } else {
//         console.log(a)
//     }
// }
// arr(3)
// arr(4,8)

// 2. створити функцію яка приймає два масиви та складає значення елементів з однаковими індексами та повертає новий результуючий масив.
//   EXAMPLE:
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// function sumArrays(array1, array2) {
//     let newArray = []
//     for (let i = 0; i < array1.length; i++) {
//         newArray.push(array1[i] + array2[i])
//     }
//     return newArray;
// }
// console.log(sumArrays([1,2,3,4],[4,5,6,7]))

// 3. Створити функцію яка приймає масив будь яких об'єктів, та повертає масив ключів всіх обєктів
//   EXAMPLE:
//   [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
