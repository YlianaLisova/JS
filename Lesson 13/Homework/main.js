// setTimeout(() => {
//     let counter = 0;
//     counter++;
//     console.log('Підйом -', counter);
//     setTimeout(() => {
//         counter++;
//         console.log('Ранкова зарядка -', counter);
//         setTimeout(() => {
//             counter++;
//             console.log('Сніданок -', counter);
//             setTimeout(() => {
//                 counter++;
//                 console.log('Навчання -', counter);
//                 setTimeout(() => {
//                     counter++;
//                     console.log('Обід -', counter);
//                     setTimeout(() => {
//                         counter++;
//                         console.log('Виконання дз -', counter);
//                         setTimeout(() => {
//                             counter++;
//                             console.log('Спорт -', counter);
//                             setTimeout(() => {
//                                 counter++;
//                                 console.log('Вечеря -',counter);
//                                 setTimeout(() => {
//                                     counter++;
//                                     console.log('Виконання дз -',counter);
//                                 },5000)
//                             },4500)
//                         },4000)
//                     },3500)
//                 },3000)
//             },2500)
//         },2000)
//     }, 1500)
// }, 1000)

new Promise((resolve, reject) => {
    let counter = 0;
    setTimeout(() => {
        counter++;
        console.log('Підйом -', counter);
        resolve(counter);
    }, 700);
})
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Ранкова зарядка -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Сніданок -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Навчання -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Обід -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Виконання дз -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Спорт -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Вечеря -', counter);
                resolve(counter);
            }, 700)
        })
    })
    .then((counter) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('Виконання дз -', counter);
                resolve(counter)
            }, 700)
        })
    })