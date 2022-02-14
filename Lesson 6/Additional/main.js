// 1.Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     let array = [];
//     while (str.length) {
//         array.push(str.substr(0, n))
//         str = str.slice(n)
//     }
//     return array
// }
// console.log(cutString('наслаждение', 3))

// 2.Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// let validator = (str) => {
//     let a = '@';
//     let b = '.';
//     let lower = str.toLowerCase();
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === a && str[i + 1] === b) {
//             console.log('Point must be two symbols after @')
//         } else if (str[i] === a && str[i + 2] === b) {
//             console.log('Point must be two symbols after @')
//             return
//         }
//     }
//     if (str.indexOf('@') === -1) {
//         console.log('This email must contain @')
//     }
//     if (str.startsWith('@')) {
//         console.log('Email can`t start with @')
//     }
//     if (str.indexOf('.') === -1) {
// console.log('This email must contain point');
//     } else {
//         console.log(`${lower}`)
//     }
//     return lower;
// }
// validator('someemail@gmail.com');
// validator('someeMAIL@gmail.com');
// validator('someeMAIL@i.ua');
// validator('some.email@gmail.com')

// 3. є масив
// let coursesArray = [
//              {
//                  title: 'JavaScript Complex',
//                  monthDuration: 5,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//              },
//              {
//                  title: 'Java Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'java core',
//                      'java advanced']
//              },
//              {
//                  title: 'Python Complex',
//                  monthDuration: 6,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'python core',
//                      'python advanced']
//              },
//              {
//                  title: 'QA Complex',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//              },
//              {
//                  title: 'FullStack',
//                  monthDuration: 7,
//                  hourDuration: 909,
//                  modules: ['html',
//                      'css',
//                      'js',
//                      'mysql',
//                      'mongodb',
//                      'react',
//                      'angular',
//                      'aws',
//                      'docker',
//                      'git',
//                      'node.js',
//                      'python',
//                      'java']
//              },
//              {
//                  title: 'Frontend',
//                  monthDuration: 4,
//                  hourDuration: 909,
//                  modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//              }
//          ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// coursesArray.sort((a,b) => b.modules.length-a.modules.length);
// console.log(coursesArray);

// 4.Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let symb = 'o';
// let str = "Астрономия это наука о небесных объектах";
// let count = (str, stringSearch) => {
//     let counter = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === stringSearch) {
//             counter.push(str[i])
//         }
//     }
//     return counter.length;
// }
// console.log(count(str, 'о'));

// 5. Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// let cutString = (str, n) => {
//     let array = [];
//     let string = str.split(' ');
//     for (let i = 0; i < n; i++) {
//         array.push(string[i]);
//     }
//     return array.join(' ')
// }
// document.writeln(cutString(str,5))

