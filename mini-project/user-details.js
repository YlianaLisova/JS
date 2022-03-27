let newUrl = new URL(location.href);
let user = JSON.parse(newUrl.searchParams.get('data'));
console.log(user);
let divWrapper = document.getElementsByClassName('wrapper')[0]
for (const key in user) {
    let keyItem = document.createElement('div');
    keyItem.style.marginTop = '15px';
    if (typeof user[key] !== 'object') {
        keyItem.innerText = `${key}: ${user[key]}`
    } else {
        keyItem.innerText = `${key}:`

        for (const item in user[key]) {
            let keyItem2 = document.createElement('div');

            if (typeof user[key][item] !== 'object') {
                keyItem2.innerText = `${item}: ${user[key][item]}`
            } else {
                keyItem2.innerText = `${item}`

                for (const keyElement in user[key][item]) {
                    let keyItem3 = document.createElement('div');
                    keyItem3.innerText = `${keyElement}: ${user[key][item][keyElement]}`
                    keyItem2.appendChild(keyItem3);
                }
            }
            keyItem.appendChild(keyItem2);
        }
    } divWrapper.append(keyItem);
}

let posts = document.getElementsByClassName('posts')[0];
let btnPost = document.createElement('button');
btnPost.classList.add('detailsBtn');
btnPost.innerText = 'post of current user'
btnPost.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const post of value) {
                let divPost = document.createElement('div');
                divPost.classList.add('post');
                divPost.innerText = `${post.id}- ${post.title}`;
                divWrapper.appendChild(divPost);
                let btnPostDetails = document.createElement('button');
                btnPostDetails.innerText = 'Post Details';
                btnPostDetails.onclick = function () {
                    location.href = `./post-details.html?data=${JSON.stringify(post)}`;
                }
                posts.append(divPost, btnPostDetails)

            }
        })
    btnPost.disabled = true;
}
let container = document.getElementsByClassName('container')[0];
container.append(btnPost);

