// 1. створити функцію яка обчислює та повертає площу прямокутника висотою
// let rectangle = (a,b) => a * b
// console.log(rectangle(5,9))

// 2. створити функцію яка обчислює та повертає площу кола
// let circle = (r) => 3.14 * r ** 2
// console.log(circle(9))

// 3. створити функцію яка обчислює та повертає площу циліндру
// let cylinder = (r,h) => 2*3.14*r*h
// console.log(cylinder(5,2))

// 4. створити функцію яка приймає масив та виводить кожен його елемент
// let array = (array) => array
// console.log(array([1,3,7]))

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let paragraph = (text) =>  {
//     document.write(`<p>${text}</p>`);
// }
// paragraph('Hi, guys');

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let createUl = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// }
// createUl('JUST DO IT');

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let createUl = (text, amount) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < amount; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUl('Dream bigger, do bigger', 3)

// 8. створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let primitiveElements = [2,'Happy', true, 78, 'Hew', false];
// let array = (arr) => {
//     document.write(`<ol>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr}</li>`)
//     }
//     document.write(`</ol>`)
// }
// array(primitiveElements);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arrayObj = [{id: 1, name: 'Olya', age: 23}, {id: 2, name: 'Vova', age: 28}, {id: 3, name: 'Anna', age: 25}];
// let array = (arr) => {
//     for (let element of arr) {
//         document.write(`<div>${element.id}. ${element.name} - ${element.age}</div>`)
//     }
// }
// array(arrayObj);