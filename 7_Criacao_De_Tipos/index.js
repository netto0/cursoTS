"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(2));
console.log(showData("ola mundo"));
console.log(showData(false));
// 2 - Constraint em generics
function showProductName(obj) {
    return `O nome do produto é ${obj.name}`;
}
console.log(showProductName({ name: "Camisa", price: 12.99 }));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Gray" };
const myPen = { name: "BIC", wheels: false, engine: false, color: "Blue" };
console.log(myCar);
console.log(myPen);
// 4 - Type Parameters
function getSomeKey(obj, key) {
    return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: '5TB',
    ram: '64GB'
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "Netto",
    age: 24,
    hasDriveLicense: true
};
console.log(showCharName(myChar, 'name'));
// 6 - Typeof type operator
const userName = "Netto";
const userName2 = "Pedro";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 2000,
    description: "Utilizado para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem ${km} Kms`);
}
showKm(newTruck.km);
const newCar = {
    km: 3000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
