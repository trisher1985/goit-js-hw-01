'use strict';
// !!!my first attempt!!!

// function makeTransaction(quantity, pricePerDroid) {
//     const totalPrice = quantity * pricePerDroid;
//     const message = `You ordered ${quantity} droids worth ${totalPrice} credits!`;
//     return message;
// }
// // console.log("YHez_1st_JS_DZ")
// console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
// console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
// console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"

// !!!the end of my first attempt!!!

//Щоб уникнути оголошення зайвої змінної в тілі функції, можна відразу ж повертати результат виразу.
// Так, немає необхідності створювати окрему змінну для зберігання результату виразу.

function makeTransaction(quantity, pricePerDroid) {
    return `You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`;
}
// console.log("YHez_1st_JS_DZ")
console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"




// Оголоси функцію makeTransaction, яка очікує два параметри,
//  значення яких будуть задаватися під час її виклику:
// • quantity— перший параметр, число, що містить кількість замовлених дроїдів 
// • pricePerDroid — другий параметр, число, що містить вартість одного дроїда

// Доповни код функції так, щоб вона повертала рядок з повідомленням про 
// покупку ремонтних дроїдів: "You ordered <quantity> droids worth <totalPrice> credits!", 
// де: • <quantity> — це кількість замовлених дроїдів • <totalPrice> — це загальна вартість 
// замовлення, тобто вартість усіх замовлених дроїдів
// Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. 
// У консоль будуть виведені результати її роботи.


