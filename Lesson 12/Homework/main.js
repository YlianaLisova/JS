// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => {
//         return value.json();
//     })
//     .then(posts => {
//         let divWrapper = document.createElement('div');
//         divWrapper.classList.add('wrapper')
//         for (const postEl of posts) {
//             let divPost = document.createElement('div');
//             divPost.classList.add('post');
//             divPost.innerHTML = `
//             <h4>ID: ${postEl.id}</h4>
//             <hr>
//             <h4>Title: ${postEl.title}</h4>
//             <h4>Body: ${postEl.body}</h4>
//             `
//             divWrapper.appendChild(divPost);
//             document.body.appendChild(divWrapper)
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => {
//         return value.json()
//     })
//     .then(comments => {
//         let divWrapper = document.createElement('div');
//         divWrapper.classList.add('wrapper2');
//         for (const commentEl of comments) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//             divComment.innerHTML = `
//             <h4>ID: ${commentEl.id} </h4>
//             <h4>Name: ${commentEl.name}</h4>
//             <h4>Email: ${commentEl.email}</h4>
//             <h4>Body: ${commentEl.body}</h4>
//             `
//         divWrapper.appendChild(divComment);
//             document.body.appendChild(divWrapper);
//         }
//     })