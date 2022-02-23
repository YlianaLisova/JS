
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let users = [{
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];
// 1. - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let array =[];
// for (const user of users) {
//     for (const element in user.address) {
//         array.push(`${element}: ${user.address[element]}`);
//     }
// }
// console.log(array)

// 2.- За допомоги циклу проітерувати масив users, записати кожного юзера у свій блок за допомоги document.createElement. Всі данні в одному блоці.
// for (const user of users) {
//     let divWrap = document.createElement('div');
//     divWrap.append( ${user.name},${user.age}, ${user.status}, Address: )
//     for (const ad in user.address) {
//         divWrap.append( ${ad}: ${user.address[ad]})
//         document.body.appendChild(divWrap)
//     }
// }

// 3.- За допомоги циклу проітерувати масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// for (const user of users) {
//     let divWrap = document.createElement('div');
//     let name = document.createElement('div');
//     name.innerText = user.name;
//     let age = document.createElement('div');
//     age.innerText = user.age;
//     let status = document.createElement('div');
//     status.innerText = user.status;
//     let address = document.createElement('div');
//     address.innerText = 'Address:';
//   //  for (const ad in user.address) {
//   //      let div = document.createElement('div');
//    //     div.innerText = `${ad}: ${user.address[ad]}`
//   //     address.appendChild(div)
//    //     divWrap.append(name,age,status,address)
//    //     document.body.appendChild(divWrap)
//     //}
// }

// 4. - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
// for (const user of users) {
//     let divWrap = document.createElement('div')
//     let divName = document.createElement('div');
//     divName.innerText = user.name;
//     let divAge = document.createElement('div');
//     divAge.innerText = user.age;
//     let divStatus = document.createElement('div');
//     divStatus.innerText = user.status;
//     let ulAddress = document.createElement('ul');
//     ulAddress.innerText = 'Address: '// user.address => [object Object]
//     for (const addressEl in user.address) {
//         let liAddress = document.createElement('li');
//         liAddress.innerText = `${addressEl}: ${user.address[addressEl]}`;
//         ulAddress.appendChild(liAddress);
//         divWrap.append(divName,divAge,divStatus,ulAddress);
//         document.body.appendChild(divWrap);
//     }
// }