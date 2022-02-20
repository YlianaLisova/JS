// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// // a) додає клас з назвою групи, елементу з ід main_header
// let addClass = document.getElementById('main_header')
// addClass.classList.add('name_group')
// console.log(addClass);

// b) робить ширину елементу ul 400px
// let widthTag = document.getElementsByTagName('ul');
// for (const widthTagElement of widthTag) {
//     widthTagElement.style.width = `400px`
// }
// console.log(widthTag);
// c) робить ширину всіх елементів з класом linkList шириною 50%
// let withLinkList = document.getElementsByClassName('linkList');
// for (const withLinkListElement of withLinkList) {
//     withLinkListElement.style.width = '50%';
// }
// console.log(withLinkList);

// d) отримує текст який зберігається в елементі з класом listElement2
// let getTxt = document.getElementsByClassName('listElement2');
// getTxt[0].innerHTML = '<a href="#">Lorem</a>'
// e) отримує всі елементи li та змінює ім колір фону на сірий
// let getLi = document.getElementsByTagName('li');
// for (let liElement of getLi) {
//     liElement.style.background = 'silver';
// }
// console.log(getTxt);

// f) отримує всі елементи 'a' та додає їм клас anchor
// let getA = document.getElementsByTagName('a');
// for (const aElement of getA) {
//     aElement.classList.add('anchor')
// }
// console.log(getA);

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контент елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let getElA = document.getElementsByTagName('a');
// for (const elAElement of getElA) {
//     if (elAElement.innerText === 'link3') {
//         elAElement.style.fontSize = '40px'
//     }
// }
// console.log(getElA);

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let getNewClass = document.getElementsByTagName('a');
// for (const aNewClass of getNewClass) {
//     let newClass = aNewClass.innerText
//     aNewClass.classList.add(`element_${newClass}`)
// }
// console.log(getNewClass);

// i) отримує всі елементи класу 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let classElSub = document.getElementsByClassName('sub-header');
// for (const classElSubElement of classElSub) {
//     classElSubElement.style.background = prompt('Enter color: green,pink,blue ...')
// }
// console.log(classElSub);

// j) отримує всі елементи 'sub-header' та змінює колір тексту у випадку якщо текст елементу = content 2 segment . Колір отримати з prompt()
// let getAllEl = document.getElementsByClassName('sub-header');
// for (const allElElement of getAllEl) {
//     if (allElElement.innerText === 'content 2 segment') {
//         allElElement.style.background = prompt('Enter color: yellow , green, red...')
//     }
// }
// console.log(getAllEl)
// k) отримує елемент з класом content_1 та заміняє в ньому тест на довільний. Текст отримати з prompt()
// let classElContent = document.getElementsByClassName('content_1');
// classElContent[0].innerHTML = prompt('Enter text')
// console.log(classElContent);

// l) отримати елементи p та змінити їм padding на 20px
// let elementsP = document.getElementsByTagName('p');
// for (const elementsPElement of elementsP) {
//     elementsPElement.style.padding = '20px';
// }
// console.log(elementsP);

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Приклад sep-2021)
// let elText2 = document.getElementsByClassName('text2');
// elText2[0].innerHTML = '<p>dec-2021</p>';
// console.log(elText2);