// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, 'Olga', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(6, 'Anna', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(8, 'Oleg', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(4, 'Igor', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(9, 'Vadym', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(2, 'Lidiya', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(7, 'Uliana', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(3, 'Max', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(5, 'Orest', 'Fdfgkj', 'poshta@gmail.com', '0631231212'),
//     new User(10, 'Orina', 'Fdfgkj', 'poshta@gmail.com', '0631231212')
// ]
// console.log(users);


// - Взяти масив з User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let userFilter = users.filter((element) =>{
//     if (element.id % 2 === 0){
//         return element
//     }})
// console.log(userFilter)

// - Взяти масив з User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let userSort = users.sort((a,b) => a.id - b.id);
// console.log(userSort)

// - створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Clients {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let arrayClients = [
//     new Clients(1,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212',['milk','beef']),
//     new Clients(2,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212', ['water','crisps','pop-corn']),
//     new Clients(3,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212',['cake','juice','tomato','orange']),
//     new Clients(4,'Oleg', 'Abrikosov', 'poshta@gmail.com', '0671231212',['beer']),
//     new Clients(5,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212',['juice','soap','cocos','mango']),
//     new Clients(6,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212', ['cake','juice','tomato','beer','milk','beef']),
//     new Clients(7,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212', ['water','crisps','pop-corn', 'mango']),
//     new Clients(8,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212',['milk','beef','sushi','cake','juice','tomato','beer']),
//     new Clients(9,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212',['water','coffee','sugar','sushi']),
//     new Clients(10,'Uliana', 'Lisova', 'poshta@gmail.com', '0671231212',['water','pop-corn'])
// ]
// console.log(arrayClients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sortProduct = arrayClients.sort((a,b) => a.order.length - b.order.length);
// console.log(sortProduct);