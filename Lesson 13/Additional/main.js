// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
let productsArray = JSON.parse(localStorage.getItem('products')) || [];
document.forms.form.onsubmit = function (e) {
    e.preventDefault();
    let productName = e.target.productName.value;
    let number = e.target.number.value;
    let price = e.target.price.value;
    let picture = e.target.picture.value;
    let product = {productName, number, price, picture}
    productsArray.push(product);
    localStorage.setItem('products', JSON.stringify(productsArray))
    e.target.productName.value = '';
    e.target.number.value = '';
    e.target.price.value = '';
    e.target.picture.value = '';
}
