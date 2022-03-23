let newUrl = new URL(location.href);
let user = JSON.parse(newUrl.searchParams.get('data'));
console.log(user);
let divWrapper = document.createElement('div')
divWrapper.classList.add('wrapper')
let divBox = document.createElement('div');
divBox.innerHTML = `
<h4>ID: ${user.id}</h4>
<h4>Name: ${user.name}</h4>
<h4>Username: ${user.username}</h4>
<h4>Email: ${user.email}</h4>
`
let ul1 = document.createElement('ul')
ul1.innerHTML = '<h4>Address:</h4>'
for (const address in user.address) {
    let li1 = document.createElement('li');
    li1.innerText = `${address}: ${user.address[address]}`
    ul1.append(li1)
}
let ul2 = document.createElement('ul');
ul2.innerHTML = `<h4>Company: </h4>`
for (const company in user.company) {
    let li2 = document.createElement('li');
    li2.innerText = `${company}: ${user.company[company]}`
    ul2.append(li2);
}
let posts = document.getElementsByClassName('posts')
let btnPost = document.createElement('button')
btnPost.classList.add('detailsBtn');
btnPost.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const post of value) {
                let divPost = document.createElement('div');
                divPost.classList.add('post');
                divPost.innerText = `${post.id}- ${post.title}`;
                divWrapper.appendChild(divPost)
            }
        })
}
btnPost.innerText = 'post of current user'
divWrapper.append(divBox, ul1, ul2)
document.body.append(divWrapper, btnPost)
