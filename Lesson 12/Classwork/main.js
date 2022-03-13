// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => {
//         return value.json()
//     })
//     .then(posts => {
//         let wrapper = document.createElement('div');
//         for (const post of posts) {
//             let divPost = document.createElement('div');
//             divPost.innerHTML = `
//         <h4>ID: ${post.id}</h4>
//         <h4>Title: ${post.title}</h4>
//         <h4>Body: ${post.body}</h4>
//         `;
//             let button = document.createElement('button');
//             button.innerText = 'Click me and get comments'
//             button.onclick = () => {
//                 fetch('https://jsonplaceholder.typicode.com/comments')
//                     .then(value => {
//                         return value.json()
//                     })
//                     .then(comments => {
//                         for (const comment of comments) {
//                             if (post.id === comment.postId) {
//                                 let divComment = document.createElement('div');
//                                 divComment.innerHTML = `
//                             <h4>ID: ${comment.postId}</h4>
//                             <h4>Name: ${comment.name}</h4>
//                             <h4>Email: ${comment.email}</h4>
//                             <h4>Body: ${comment.body}</h4>
//                             `
//                                 divPost.appendChild(divComment);
//                             }
//                             // button.disabled = true;
//                         }
//
//                     })
//             }
//             divPost.appendChild(button);
//             wrapper.appendChild(divPost);
//             document.body.appendChild(wrapper);
//
//         }
//     })