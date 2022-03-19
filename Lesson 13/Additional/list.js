let container = document.getElementById('container');
let key = 'products';
let products = JSON.parse(localStorage.getItem(key));

products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    let content = document.createElement('div');
    content.innerHTML = `
    <h4>Title: ${product.productName},</h4>
    <h4>Number: ${product.number}</h4>
    <h4>Price: ${product.price}</h4>
    <h4>Picture: ${product.picture}</h4>`
    let button = document.createElement('button');
    button.innerText = 'Click me and clear your list'
    button.onclick = function () {
        content.innerText = '';
        button.style.display = 'none'
    }
    productDiv.append(content, button);
    container.appendChild(productDiv)
})