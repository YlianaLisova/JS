// 1.створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let arrowMin = (a, b, c) => {
//     if (a < b && a < c) {
//        console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else {
//         console.log(c)
//     }
// }
// arrowMin(42,1,67);

// 2. створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let arrowMax = (a,b,c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// arrowMax(3,74,23);

// 3. створити функцію яка повертає найбільше число з масиву
// let arrayMax = [1,2,16,8,6];
// let maxArray = (arrayMax) => {
//     let max = arrayMax[0];
//     for (let element of arrayMax) {
//         if (element > max) {
//             max = element
//         }
//     }
//     return max;
// }
// console.log(maxArray(arrayMax))

// 4. створити функцію яка повертає найменьше число з масиву
// let arrayMin = [176,765,98,234,562,24,5667,8];
// let minArray =(arrayMin) => {
//     let min = arrayMin[0];
//     for (let element of arrayMin) {
//         if (element < min) {
//             min = element;
//         }
//     }
//     return min;
// }
// console.log(minArray(arrayMin))

// 5. створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [1,7,34,75];
// let sumArray = (array) => {
//     let sum = 0
//     for (let element of array) {
//         sum += element;
//     }
//     return sum;
// }
// document.write(`Сума елементів масиву: ${sumArray(array)}`)
// console.log(`Сума елементів масиву: ${sumArray(array)}`)

// 6.створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [3,7,45,67,2,7];
// let middleArray = (array) => {
//     let sum = 0;
//     for (let element of array) {
//         sum += element;
//     }
//     return sum / array.length
// }
// console.log(`Середнє арифметичне: ${middleArray(array)}`)

// 7. створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let numbers = (...abc) => {
//     let max = abc[0];
//     let min = abc[0];
//     for (let element of abc) {
//         if (element > max) {
//             max = element;
//         } if (element < min) {
//             min = element;
//         }
//     }
//     console.log(max)
//     return min;
// }
// console.log(numbers(1, 3, 5, 6, 2, 4));

// 8. створити функцію яка заповнює масив рандомними числами
// let randomNumbers = (length) => {
//     let numRandom = [];
//     for (let i = 0; i < length; i++) {
//         numRandom.push(Math.round(Math.random() * 100))
//     }
//     return numRandom
// }
// console.log(randomNumbers(5))

// 9.створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomNumbers = (length, limit) => {
//     let numRandom = [];
//     for (let i = 0; i < length; i++) {
//        numRandom.push(Math.floor(Math.random() * limit))
//     }
//     return numRandom;
// }
// console.log(randomNumbers(7,107));

// 10. Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1,2,3];
// let array = (num) => {
//     let newArray = [];
//     for (let i = num.length -1,ri=0;  i >= 0; i--, ri++) {
//       newArray[ri] = num[i]
//     }
//
//     return newArray
// }
// console.log(array(arr));


