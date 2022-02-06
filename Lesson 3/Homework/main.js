// 1. --створити масив з: - з 5 числових значень; - з 5 стічкових значень; - з 5 значень стрічкового, числового та булевого типу; - та вивести його в консоль
// let numbers = [5,78,-45,100500,18];
// let strings = ['queen', 'king', 'princess', 'prince'];
// let all = ['just', 'do', 'it', true, 1.5];
// console.log(numbers);
// console.log(strings);
// console.log(all);

// 2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array[0] = 'Just';
// array[1] = 'do';
// array[2] = 'it';
// console.log(array)

// 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>`);
// }
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>${i}- Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>`);
// }
// let a = 0;
// while (a < 20) {
//     document.write(`<h1>This is title</h1>`);
//     a++;
// }
// let b = 0;
// while (b < 20) {
//     document.write(`<h1>${b} - Lorem ipsum dolor sit amet.</h1>`)
//     b++;
// }

// 4. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let numbers = [0,1,2,3,4,5,6,7,8,9];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }
// let strings = ['Okten', 'web', 'just', 'do', 'it', 'year', 'happy', 'age', 'name', 'good'];
// for (let i = 0; i < strings.length; i++) {
//     console.log(strings[i])
// }
// let allElements = [true, 'cool', 50, 367, 'new', 'string', false, 67, 'numbers',200]
// for (let i = 0; i < allElements.length; i++) {
//     console.log(allElements[i])
// }
// let elements1 = [90, 'mood', true, 25, false, 'IT', 'blog', 69, true, 'enjoy'];
// for (let i = 0; i < elements1.length; i++) {
//     if (typeof elements1[i] === 'boolean') {
//         console.log(elements1[i])
//     }
// }
// let elements2 = [90, 'mood', true, 25, false, 'IT', 'blog', 69, true, 'enjoy'];
// for (let i = 0; i < elements2.length; i++) {
//     if (typeof elements2[i] === 'number') {
//         console.log(elements2[i])
//     }
// }
// let elements3 = [90, 'mood', true, 25, false, 'IT', 'blog', 69, true, 'enjoy'];
// for (let i = 0; i < elements3.length; i++) {
//     if (typeof elements3[i] === 'string') {
//         console.log(elements3[i])
//     }
// }

// 5. - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// let array = [];
// array[0] = 'good';
// array[1] = 'day';
// array[2] = 365;
// array[3] = true;
// array[4] = false;
// array[5] = 23;
// array[6] = 17;
// array[7] = 'black';
// array[8] = 'white';
// array[9] = false;
// for (let i = 0; i < array.length; i ++) {
//     console.log(array[i])
// }
// for (let i = 0; i < 10; i++) {
//     console.log('Поточний номер кроку:' + i);
//     document.write('Поточний номер кроку:' + i + ' ')
// }
// for (let i = 0; i < 100; i++) {
//     console.log('Поточний номер кроку:' + i)
//     document.write('Поточний номер кроку:' + i + ' ')
// }
// for (let i = 0; i < 100; i += 2) {
//     console.log('Поточний номер кроку:' + i)
//     document.write('Поточний номер кроку:' + i + ' ')
// }
// for (let i = 0; i < 100; i++) {
//     if (i % 2 ===0) {
//         console.log('Поточний номер кроку:' + i)
//         document.write('Поточний номер кроку:' + i + ' ')
//     }
// }
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log('Поточний номер кроку:' + i)
//         document.write('Поточний номер кроку:' + i + ' ')
//     }
// }

