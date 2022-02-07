// 1. створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaOfRectangle(a,b) {
//     return a*b;
// }
// console.log(areaOfRectangle(20,50));
// document.write('Площа прямокутника: ' + areaOfRectangle(20,50));

// 2. створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaOfCircle(r) {
//     let radius = r ** 2;
//     let sCircle = 3.14 * radius;
//     return sCircle;
// }
// console.log(areaOfCircle(17));
// document.write('Площа кола: ' + areaOfCircle(17))

// 3. створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h,r) {
//     let sCylinder = 2*3.14*h*r;
//     return sCylinder
// }
// console.log(areaCylinder(13, 12));
// document.write('Площа циліндра: ' + areaCylinder(13, 12));

// 4. створити функцію яка приймає масив та виводить кожен його елемент
// let array = [22,45,67,'just ', 'do ', 'it ']
// function allArray(array) {
//     for (let i = 0; i < array.length; i++) {
//         document.write(array[i])
//         console.log(array[i])
//     }
// }
// allArray(array);

// 5. створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraphText(p) {
//     document.write(`<p>${p}</p>`)
// }
// paragraphText('You are the best')
// За допомогою циклу
// function paragraphText(p) {
//     for (let i = 1; i <= 10; i++) {
//         document.write(`<p>${i} - ${p}</p>`)
//     }
// }
// paragraphText('You are the best')

// 6. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//                                First Version
// function ulCreator(text) {
//     document.write(`<div>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</div>`)
// }
// ulCreator('Hello world!')
//                                 Second Version
// function ulCreator(text) {
//     document.write(`<div>`)
//     for (let i = 1; i <= 3; i++) {
//         document.write(`<li>${text}</li>`)
//     }
//     document.write(`</div>`)
// }
// ulCreator('Hello world!')

// 7. створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function ulCreator(text, number) {
//     document.write(`<div>`)
//     for (let i = 0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</div>`);
// }
// ulCreator('Hello world!', 3);

// 8.створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [4,false, 'Happy', 'New', 'Year', true];
// function primitiveElements(array) {
//     document.write(`<ol>`)
//     for (let i = 0; i < array.length;i++) {
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }
// primitiveElements(array);

// 9. створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{id: 1, name: 'Olya', age: 16}, {id: 2, name: 'Oxana', age: 17}, {id: 3, name: 'Lidiya', age: 23}, {id: 4, name: 'Igor', age: 53},{id: 5, name: 'Orisya', age: 46}]
// function acceptArray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}. ${arrayElement.name}, ${arrayElement.age}</div>`)
//     }
// }
// acceptArray(array);
