// 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
let div = document.getElementById('text');
let button = document.getElementById('button');
button.onclick = function () {
    div.style.display = 'none'
}

// 2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

//
// 3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let input = document.getElementById('age');
// let button = document.getElementById('button2');
// button.onclick = function (e) {
//     if (input >= 18) {
//         console.log('Ти повнолітній!')
//     } else if (input < 18) {
//         console.log('Ти ще маленький :)')
//     }
//     e.preventDefault();
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
//
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
