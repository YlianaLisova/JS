// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => {
        return value.json()
    })
    .then(users => {
        let wrapper = document.createElement('div');
        for (const user of users) {
            let divUser = document.createElement('div');
            divUser.innerHTML = `
        <h4>ID: ${user.id}</h4>
        <h4>Name: ${user.name}</h4>
        <h4>Username: ${user.username}</h4>
        <h4>Email: ${user.email}</h4>
        <h4 style="margin: 0">Address:</h4>
        <ul>
        <li>street: ${user.address.street}</li>
        <li>suite: ${user.address.suite}</li>
        <li>city: ${user.address.city}</li>
        <li>zipcode: ${user.address.zipcode}</li>
        <ul>geo:
        <li>lat: ${user.address.geo.lat}</li>
        <li>lng: ${user.address.geo.lng}</li>
        </ul>
        </ul>
        <h4>Phone: ${user.phone}</h4>
        <h4>Website: ${user.website}</h4>
        <h4>Company:</h4>
        <ul>
        <li>name: ${user.company.name}</li>
        <li>catchPhrase: ${user.company.catchPhrase}</li>
        <li>bs: ${user.company.bs}</li>
</ul>`
            let button = document.createElement('button');
            button.innerText = 'Click me and see posts';
            button.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(value => {
                        return value.json()
                    })
                    .then(posts => {
                        for (const post of posts) {
                            if (user.id === post.userId) {
                                let divPost = document.createElement('div')
                                divPost.innerHTML = `
                                <h4>userId: ${post.userId}</h4>
                                <h4>ID: ${post.id}</h4>
                                <h4>Title: ${post.title}</h4>
                                <h4>Body: ${post.body}</h4>
                                <hr>`
                                let button2 = document.createElement('button')
                                button2.innerText = 'Click me and see comments'
                                button2.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(value => {
                                            return value.json()
                                        })
                                        .then(comments => {
                                            for (const comment of comments) {
                                                if (post.userId === comment.postId) {
                                                    let divComment = document.createElement('div')
                                                    divComment.innerHTML = `
                                                    <h4>Post ID: ${comment.postId}</h4>
                                                    <h4>ID: ${comment.id}</h4>
                                                    <h4>Name: ${comment.name}</h4>
                                                    <h4>Email: ${comment.email}</h4>
                                                    <h4>Body: ${comment.body}</h4>
                                                    `
                                                    divComment.appendChild(button2)
                                                    divPost.appendChild(divComment);

                                                }
                                            }
                                        })
                                }

                                divUser.appendChild(divPost)
                            }
                        }
                    })
            }
            divUser.appendChild(button)
            wrapper.appendChild(divUser);

        }
        document.body.appendChild(wrapper)
    })