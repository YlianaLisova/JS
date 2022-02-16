// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let array = [];
// a)
//     for (let i = 0; i < 100; i++) {
// //         if (i % 2 === 0) {
// //             array.push(i)
// //         }
// // }
// // console.log(array);

//b)
// for (let i = 0; i < 100; i++) {
//     if (!(i % 2 === 0)) {
//         array.push(i)
//     }
// }
// console.log(array);

// c)
// for (let i = 0; i < 20; i++) {
//     array.push(Math.round(Math.random() * 100));
// }
// console.log(array);

// d)
// for (let i = 0; i < 20; i++) {
//     array.push(Math.round(Math.random() * ((732-8))+8));
// }
// console.log(array);

// 2.Вивести за допомогою console.log кожен третій елемент
// let array = [1,2,3,4,5,6,7,8,9,10,11,12];
// for (let i = 0; i < array.length; i+=3) {
//     console.log(array[i])
// }

// 3. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним.
// let array = [1, 2, 3, 5, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 43, 45, 65, 34, 56, 676, 6, 4, 35, 44];
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i])
//     }
// }

// 4. Вивести за допомогою console.log кожен третій елемент тільки якщо цей елемент є парним та записати їх в новий масив
// let array = [1, 2, 3, 5, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 43, 45, 65, 34, 56, 676, 6, 4, 35, 44];
// let newArray = [];
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i] % 2 === 0) {
//         newArray.push(array[i])
//     }
// }
// console.log(newArray)

//5. Вивести кожен елемент масиву, сусід справа якого є парним
//   EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let array = [1, 2, 3, 5, 5, 6, 7, 8, 9, 10, 11, 12, 25, 26, 43, 45, 65, 34, 56, 676, 6, 4, 35, 44];
// for (let i = 0; i < array.length; i += 3) {
//     if (array[i+1] % 2 === 0) {
//         console.log(array[i])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr = [100,250,50,168,120,345,188];
// let sumArr = 0;
// let middle = [];
// for (let i = 0; i < arr.length; i++) {
//     sumArr = sumArr + arr[i]
//     middle = sumArr / arr.length
// }
// console.log(middle)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let array = [];
// let newArray = [];
// for (let i = 0; i < 20; i++) {
//     array.push(Math.round(Math.random() * 100));
//     newArray.push(array[i] * 5);
// }
// console.log(newArray);

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

