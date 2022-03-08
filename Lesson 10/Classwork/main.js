// - створити 2 форми по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let div1 = document.createElement('div');
// div1.innerText = 'Container 1';
// document.body.appendChild(div1);
//
// let div2 = document.createElement('div');
// div2.innerText = 'Container 2'
// document.body.appendChild(div2);
//
// let form1 = document.createElement('form');
// form1.setAttribute('name', 'form1');
// div1.appendChild(form1);
//
// let form2 = document.createElement('form');
// form2.setAttribute('name', 'form2');
// div2.appendChild(form2);
//
// let input1 = document.createElement('input');
// input1.setAttribute('name', 'input1');
// let input2 = document.createElement('input');
// input2.setAttribute('name','input2');
// let input3 = document.createElement('input');
// input3.setAttribute('name', 'input3');
// let input4 = document.createElement('input');
// input4.setAttribute('name', 'input4');
//
// let button = document.createElement('button');
// button.innerText = 'Common button';
// document.body.appendChild(button);
//
// form1.append(input1, input2);
// form2.append(input3, input4);
//
// button.addEventListener('click', function (e){
//     console.log(document.forms.form1.input1.value );
//     console.log(document.forms.form1.input2.value);
//     console.log(document.forms.form2.input3.value);
//     console.log(document.forms.form2.input4.value);
//     e.preventDefault();
// })

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вміст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)
let input1 = document.createElement('input');
let input2 = document.createElement('input');
let input3 = document.createElement('input');
let btn = document.createElement('button');
btn.innerText = 'Create table';
document.body.append(input1,input2,input3,btn);

btn.addEventListener('click', function (){
    let tr = input1.value;
    let th = input2.value;
    let text = input3.value;

    function generation(tr, td, text) {
        let div = document.createElement('div');
        let table = document.createElement('table');
        table.style.border = '1px solid black';
        div.appendChild(table);
    }
})










// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
//
// button.innerText = 'Створи таблицю';
// document.body.append(inputOne, inputTwo, inputThree, button);
//
//
// button.addEventListener('click', function () {
//     let tr = inputOne.value;
//     let td = inputTwo.value;
//     let enterText = inputThree.value;
//
//     function generationTable(tr, td, inner) {
//         let table = document.createElement('table');
//         let divTable = document.createElement('div');
//
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr');
//             tr.style.border = '1px solid blue';
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td');
//                 td.style.border = '1px solid green';
//                 td.innerText = `${inner}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//         }
//     }
//     generationTable(tr, td, enterText);
// })
//
// - Створити масив не цензурних слів.
//     Створити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
//
// - Створити масив не цензурних слів.
//     Створити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку