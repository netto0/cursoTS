"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//1: Arrays
let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers);
// 1.1: Outra sintaxe de arrays
const nums = [100, 200];
console.log(nums);
//2: Any
const arr1 = [1, 'oi', true];
console.log(arr1);
//3: Tipos em parâmetros
function soma(a, b) {
    console.log(a + b);
}
soma(2, 9);
//4: Retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Netto"));
//5: Funções anônimas
setTimeout(function () {
    const sallary = 1000;
    // console.log(sallary)
}, 2000);
//6: Tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 80 };
passCoordinates(objCoord);
//7: Props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    c && console.log("C: " + c);
}
showNumbers(1, 2, 3);
showNumbers(9, 10);
//8: Validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, tudo bem?`);
    }
    return (`Olá, ${firstName}, tudo bem?`);
}
console.log(advancedGreeting('Orlandi', 'Netto'));
console.log(advancedGreeting('Pedro'));
//9: Union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
//10: Avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("CEO"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("100");
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
//13: Interface X type alias
// Type alias = fixo
// Interface = incrementável
//14: Literal types
let test;
test = 'testando';
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//15: Non null assertion operators
const p = document.getElementById("some-p");
console.log(p?.innerText);
//16: Bigint
let n;
n = 1000n;
//17: Symbol
// * Mesmo que duas variáveis possuam o mesmo valor, elas são consideradas únicas
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
