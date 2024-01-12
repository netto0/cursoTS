"use strict";
// 1 - Void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - Callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Netto");
// 3 - Generic function
// "Por convenção normalmente é utilizado 'T' ou 'U' pra referenciar um generic"
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["A", "B", "C"]));
// é possível também setar mais tipos de generics diferentes
function mergeObjects(obj1, obj2, item3) {
    return {
        ...obj1,
        ...obj2,
        item3
    };
}
const newObject = mergeObjects({ name: "Netto" }, { age: 24, job: "Programmer" }, "Verdadeiro");
console.log(newObject);
// 4 - Constraints
// "constraints são utilizadas para delimitar os tipos possíveis de um generic"
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(2, 5));
console.log(biggestNumber("7", "10"));
// 5 - Especificar tipos de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["Gato", "Cachorro", "Coelho"]));
// 6 - Parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    else {
        return `Olá ${name}, tudo bem?`;
    }
}
console.log(modernGreeting("Netto"));
console.log(modernGreeting("Netto", "Sr."));
// 7 - Parâmetros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(15));
console.log(somaDefault(25));
// 8 - Tipo unknown
// Funciona como o "any" porém precisa de validação de tipo para realizar algumas operações, servindo como uma "trava"
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething(3);
doSomething(["Gato", "Cachorro", "Coelho"]);
// 9 - Tipo never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Erro sem nome")
// 10 - Rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => number + sum);
}
console.log(sumAll(1, 2, 3));
// 11 - Destructuring como parâmetro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
