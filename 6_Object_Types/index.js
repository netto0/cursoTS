"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const tshirt = {
    name: "Camisa",
    price: 4.99,
    isAvailable: true
};
showProductDetails(tshirt);
function showUserDetails(user) {
    console.log(`O usuário tem o email: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}
const u1 = {
    email: "emailteste@gmail.com",
    role: "CEO"
};
const u2 = {
    email: "emailteste22@gmail.com"
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
let coords = {
    x: 10
};
coords.y = 19;
console.log(coords);
const netto = {
    name: "Netto",
    age: 24
};
const clark = {
    name: "Clark",
    age: 982,
    superPowers: ["X-Ray vision"]
};
console.log(netto);
console.log(clark);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - Readonly array
// Não permite modificações diretas dos itens do array, apenas por meio de métodos como o map
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[2] = "Pera"
console.log(myArray);
myArray = myArray.map((item) => { return `Fruta: ${item}`; });
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
// 9 - Tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
