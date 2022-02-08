// 1. створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function numbers(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//     } else if (num2 < num1 && num2 < num3) {
//         document.write(num2)
//     } else {
//         document.write(num3)
//     }
// }
// numbers(433,452,374);

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function numbers(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1)
//     } else if (num2 >  num1 && num2 > num3) {
//         document.write(num2)
//     } else {
//         document.write(num3)
//     }
// }
// numbers(100,700,98)

// 3. створити функцію яка повертає найбільше число з масиву
// let maxArray = [45, 7800, 257, 987, 457, 34, 90, 17]
// function arrayMax(maxArray) {
//     let max = maxArray[7];
//     for (const element of maxArray) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h2>Найбільший елемент масиву: ${arrayMax(maxArray)}</h2>`)

// 4. створити функцію яка повертає найменьше число з масиву
// let minArray = [28, 43, 987, 47, 8, 84, 24, 87, 9, 65, 3, 67];
//
// function arrayMin(minArray) {
//     let min = minArray[7]
//     for (const element of minArray) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min
// }
// document.write(`<p>Найменше значення масиву: ${arrayMin(minArray)} </p>`)

// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [23,17,46,53];
// function sumArray(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum;
// }
// document.write(`<p>Сума значень елементів масиву: ${sumArray(array)}</p>`)

// 6. створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [27,655,34,8,345,98,677,476]
// function middleA(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement
//     }
//     return sum/array.length
// }
// document.write(middleA(array))

// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function numbers(...abc) {

}