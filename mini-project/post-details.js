let postWrapper = document.getElementsByClassName('post')[0];
let newUrl = new URL(location.href);
let post = JSON.parse(newUrl.searchParams.get('data'));
console.log(post);