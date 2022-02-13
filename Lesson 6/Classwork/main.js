// 1. - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let validName = (string, symbol) => {
//     let arr = [];
//     if (string.includes(symbol)) {
//         let a = string.split(symbol);
//         a.forEach((string) => {
//             if (string)
//                 arr.push(string);
//         })
//         console.log(arr.join(' '));
//     }
// }
// validName(n1, '..');
// validName(n2, '-');
// validName(n3, '_');

// 2.- створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let random = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr;
// }
// let result = random(7);
// console.log(result);

// 3. - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// result.sort((a,b) => a - b);
// console.log(result);
// result.sort((a,b) => b-a);
// console.log(result);

// 4. створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати його за допомоги filter, залишивши тільки парні числа
// let random = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr.filter(number => number % 2 === 0);
// }
// let result = random(7);
// console.log(result);

// 5. створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
//     // за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let random = (length) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr.map(number => number.toString())
// }
// console.log(random(6))

// 6. створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//     // або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let sortNums = (array, direction) => {
//     if (direction === 'ascending')
//         return array.sort((a,b) => a - b);
//     if (direction === 'descending')
//         return array.sort((a,b) => b - a)
// }
// console.log(sortNums([2,8,6,723,56,76,32,1,76], 'descending'));

// 7.  є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// відсортувати його за спаданням за monthDuration
// let sort = coursesAndDurationArray.sort((a,b) => a.monthDuration - b.monthDuration);
// console.log(sort)

//відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter((month) => {
//     return month.monthDuration > 5;
// })
// console.log(filter);