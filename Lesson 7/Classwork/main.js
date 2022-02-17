// 1. - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function CarCreator(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             if (typeof this[key] !== 'function') {
//                 console.log(`${key} - ${this[key]}`)
//             }
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
// let addCar = new CarCreator('Audi', 'Germany', 2021, 305, 4.0);
// console.log(addCar);
// addCar.drive();
// addCar.info();
// addCar.increaseMaxSpeed(20);
// addCar.drive();
// addCar.changeYear(2010)
// addCar.addDriver('Vasil')
// addCar.info();
// console.log(addCar)

// 2. Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class CarCreator {
//     constructor(model,producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//     }
//     drive () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//     info () {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     increaseMaxSpeed (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//     changeYear (newValue) {
//         this.year = newValue;
//     }
//     addDriver (driver) {
//         this.driver = driver
//     }
// }
// let newCar = new CarCreator('Audi', 'Germany', 2021, 305, 4.0);
// console.log(newCar);
// newCar.drive();
// newCar.info();
// newCar.increaseMaxSpeed(32);
// newCar.drive();
// newCar.changeYear(2022)
// newCar.addDriver('Yliana')
// newCar.info();
// console.log(newCar);

// 3.-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// class  Cinderella {
//     constructor(name,age,footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// //Створити масив з 10 попелюшок.
// let array = [
//     new Cinderella('Olya',18,35),
//     new Cinderella('Yliana' , 18, 39),
//     new Cinderella('Ann' , 19, 32),
//     new Cinderella('Nastya' , 18, 36),
//     new Cinderella('Ira' , 18, 37),
//     new Cinderella('Sophia' , 18, 40),
//     new Cinderella('Oxana' , 18, 40),
//     new Cinderella('Irina' , 18, 41),
//     new Cinderella('Sasha' , 18, ),
//     new Cinderella('Sophia' , 13, 33)
// ];
// // Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prince {
//     constructor(name, age, shoeFind) {
//         this.name = name;
//         this.age = age;
//         this.shoeFind = shoeFind;
//     }
// }
// let prince = new Prince('Anonym',24,39)
//
// // За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// let para = (array,prince) => {
//     for (const element of array) {
//         if (element.footSize === prince.shoeFind) {
//             return `Your cinderella is ${element.name}`
//         }
//     }
// }
// console.log(para(array,prince))
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let addPara = array.find((girl) => girl.footSize === prince.shoeFind) ;
// console.log(addPara);

