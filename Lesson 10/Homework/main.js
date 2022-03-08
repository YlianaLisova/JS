// 1. - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let div = document.getElementById('text');
// let button = document.getElementById('button');
// button.onclick = function () {
//     div.style.display = 'none'
// }

// 2. - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let button = document.getElementById('button');
// button.onclick = function () {
//     button.style.display = 'none';
// }
//
// 3. - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію
// з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// document.getElementById('button2').onclick = function (e) {
//     let age = document.getElementById('age').value;
//     if (!age) {
//         alert('Write your age')
//     } else if (+age < 18) {
//         alert('You are small yet!')
//     } else {
//         alert('Welcome')
//     }
//     e.preventDefault();
// }

// 4. Создайте меню, которое раскрывается/сворачивается при клике
// let menuElement = document.querySelector('.menu');
// let titleElement = menuElement.querySelector('.title');
//
// titleElement.onclick = function () {
//     menuElement.classList.toggle('hidden');
// }
//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let comments = [
//     {title: 'Lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Lorem', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'Lorem', body: 'lorem ipsum dolo sit ameti'}
// ]
//
// let listOfComments = document.createElement('div');
// for (const listOfComment of comments) {
//     let div = document.createElement('div');
//     let h3 = document.createElement('h3')
//     let p = document.createElement('p');
//     let btn = document.createElement('button')
//     let hr = document.createElement('hr')
//
//     h3.innerText = listOfComment.title
//     p.innerText = listOfComment.body
//     btn.innerText = 'Click'
//
//     btn.onclick = () => {
//         p.classList.toggle('hidden2');
//     }
//     div.append(h3, p, btn);
//     listOfComments.append(div, hr)
// }
// document.body.appendChild(listOfComments)