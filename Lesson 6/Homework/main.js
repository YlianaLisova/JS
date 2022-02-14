// 1. Знайти та вивести довжину наступних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// let variable1 = 'hello world';
// console.log(variable1.length);
// let variable2 = 'lorem ipsum';
// console.log(variable2.length);
// let variable3 = 'javascript is cool';
// console.log(variable3.length);

// 2.Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// let variable1 = 'hello world';
// let up1 = variable1.toLocaleUpperCase();
// console.log(up1);
// let variable2 = 'lorem ipsum';
// let up2 = variable2.toLocaleUpperCase();
// console.log(up2);
// let variable3 = 'javascript is cool';
// let up3 = variable3.toLocaleUpperCase();
// console.log(up3);

// 3.  Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let variable1 = 'HELLO WORLD';
// let lower1 = variable1.toLocaleLowerCase();
// console.log(lower1);
// let variable2 = 'LOREM IPSUM';
// let lower2 = variable2.toLocaleLowerCase();
// console.log(lower2);
// let variable3 = 'JAVASCRIPT IS COOL';
// let lower3 = variable3.toLocaleLowerCase();
// console.log(lower3);

// 4.  Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim);

// 5.Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let stringToArray = (str) => {
//     return str.split(' ');
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToArray(str);
// document.writeln(arr);
// console.log(arr);

// 6. Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     //  //   let str = 'Каждый охотник желает знать';
//     //  //    document.writeln(delete_characters(str, 7)); // Каждый
// let delete_characters = (str, length) => {
//     return str.substr(str,length)
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7))

// 7. Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.\
//     // При цьому всі символи рядка необхідно перевести у верхній регістр.
//     // //    let str = "HTML JavaScript PHP";
//     // //document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let insert_dash = (str) => {
//     return str.split(' ').join('-').toUpperCase()
// }
// let str = 'HTML JavaScript PHP';
// console.log(insert_dash(str));

// 8.  Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => {
//     if (!str) return str;
//     return  str[0].toUpperCase() + str.slice(1);
// }
// document.writeln(firstUp('hello world'));
// console.log(firstUp('hello world'));

// 9. Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
// return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// }
// console.log(capitalize('just do it'));
