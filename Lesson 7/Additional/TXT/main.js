// 1.
// class User {
//     constructor(id, personName, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
//         this.id = id;
//         this.personName = personName;
//         this.username = username;
//         this.email = email;
//         this.address = {street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
//         this.phone = phone;
//         this.website = website;
//         this.company = {companyName: companyName, catchPhrase: catchPhrase, bs: bs}
//     }
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Kulas Light', 'Gwenborough', '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')
// console.log(user)

//2.fields - Створити функцію конструктор / клас який описує об'єкт тегу
// Поля :
//  -назва тегу ()
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru
//
//  Таким чином описати теги:-a; -div; -h1; -span; -input; -form; -option; -select
// class Fields {
//     constructor(titleOfTag, action, arrayWithAttrs, name1, action1, name2, action2, name3, action3) {
//         this.titleOfTag = titleOfTag;
//         this.action = action;
//         this.arrayWithAttrs = arrayWithAttrs;
//         this.attrs1 = {name1: name1, action1: action1};
//         this.attrs2 = {name2: name2, action2: action2};
//         this.attrs3 = {name3: name3, action3: action3};
//     }
// }
//
// let fields = [
//     new Fields('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.', ['href', 'type', 'target'], 'href', 'Задает адрес документа, на который следует перейти.', 'type', 'Указывает MIME-тип документа, на который ведёт ссылка.', 'target', 'Имя окна или фрейма, куда браузер будет загружать документ.'),
//     new Fields('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.', ['align', 'title'], 'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.'),
//     new Fields('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня.', ['align'], 'align', 'Определяет выравнивание заголовка.'),
//     new Fields('<span>', 'Тег <span> предназначен для определения строчных элементов документа.', ['id', 'style', 'accesskey'], 'id', 'Указывает имя стилевого идентификатора.', 'style', 'Применяется для определения стиля элемента с помощью правил CSS.', 'accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'),
//     new Fields('<input>', ' Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', ['accept', 'alt', 'form'], 'accept', 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.', 'alt', 'Альтернативный текст для кнопки с изображением.', 'form', 'Связывает поле с формой по её идентификатору.'),
//     new Fields('<form>', 'Связывает поле с формой по её идентификатору.', ['id','action'], 'id', 'Указывает имя стилевого идентификатора.','action','Вказує URL адресу обробника форми.'),
//     new Fields('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', ['disabled','label','selected'], 'disabled','Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.', 'selected', 'Заранее устанавливает определенный пункт списка выделенным.'),
//     new Fields('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.', ['multiple','size', 'tabindex'],'multiple','Позволяет одновременно выбирать сразу несколько элементов списка.', 'size', 'Количество отображаемых строк списка.', 'tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу.')
// ]
// console.log(fields)
