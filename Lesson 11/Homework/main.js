// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let form1 = document.forms.form1;
// form1.onsubmit = function (e) {
//     e.preventDefault();
//     localStorage.setItem('inputName', JSON.stringify({
//         inputName: e.target.username.value,
//         inputAge: e.target.age.value
//     }))
// }
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let array = JSON.parse(localStorage.getItem('cars')) || [];
let form = document.forms.form2;
form.onsubmit = function (e) {
    e.preventDefault();
    let model = e.target.model.value;
    let type = e.target.type.value;
    let volume = e.target.volume.value;
    let cars = {model, type, volume};
    array.push(cars);
    localStorage.setItem('cars', JSON.stringify(array))

}