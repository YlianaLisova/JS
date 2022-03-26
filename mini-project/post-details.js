let newUrl = new URL(location.href);
let post = JSON.parse(newUrl.searchParams.get('data'));
console.log(post);
let postWrapper = document.getElementsByClassName('post')[0];
postWrapper.innerHTML = `
<h4>UserId: ${post.userId}</h4>
<h4>Id: ${post.id}</h4>
<h4>Title: ${post.title}</h4>
<h4>Body: ${post.body}</h4>
`
let commentsWrapper = document.getElementsByClassName('comments')[0];
fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(value => value.json())
    .then(value => {
        for (const comment of value) {
            let li = document.createElement('li');
            li.classList.add('li');
            li.innerText = comment.body;
            commentsWrapper.appendChild(li);
        }
    })
