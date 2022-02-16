// 1. Дано натуральне число n. Выведите все числа от 1 до n.
// let n = 21
// function natureNum(counter) {
//     console.log(counter);
//     counter++;
//     if (counter >= n) {
//         return;
//     } else {
//         natureNum(counter);
//     }
// }
// natureNum(1);

// 2. Даны два целых числа A и В . Выведите все числа от A до B включаючи, в порядку зростання, якщо A < B, или в порядку убывания в іншому випадку.
// let carry = (A, B) => {
//     let arr = [];
//     for (let i = A; i <= B; i++) {
//         if (A < B) {
//             arr.push([i]);
//         }
//     }
//     for (let m = B; m <= A; m++) {
//         arr.push([m]);
//     }
//     return arr;
// }
// console.log(carry(18,4));
// console.log(carry(4,18));

// 3. функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
// let arrayFunction = (arr, i) => {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     return arr;
// }
// console.log(arrayFunction([9, 8, 0, 4], 0));
// console.log(arrayFunction([9, 8, 0, 4], 1));
// console.log(arrayFunction([9, 8, 0, 4], 2));

// 4. Створити функцію яка буде переносити елементи з значенням 0 у кінець масиву. Зберігаючи при цьому порядок не нульових значень.
// Довжина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
let array = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {

        }
    }
    return arr
}
console.log(array([1,0,6,0,3]))