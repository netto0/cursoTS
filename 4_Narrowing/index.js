"use strict";
// 1 - Type guard
// validação do tipo dos dados através do "typeof"
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("não foi possível fazer esta operação");
    }
}
sum("4", "9");
sum(13, 12);
sum("13", 12);
// 2 - Checando se valor existe
// *É preciso ter cuidado com variáveis que podem assumir o valor de false (como 0)
function operations(arr, operation) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
        }
        else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
        }
    }
    else {
        console.log("Defina uma operação");
    }
}
operations([1, 2, 9, 3]);
operations([1, 2, 9, 3], "sum");
operations([1, 2, 9, 3], "multiply");
// 3 - Instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const pedro = new User("Pedro");
const carlos = new SuperUser("Carlos");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(pedro);
userGreeting(carlos);
// 4 - Operador in
// verifica se um parâmetro está presente na classe/objeto
class dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const bang = new dog("Bang");
const maia = new dog("Maia", "Blue Heeler");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`${dog.name} é da raça "${dog.breed}"`);
    }
    else {
        console.log(`${dog.name} é vira-lata`);
    }
}
showDogDetails(bang);
showDogDetails(maia);
//DESAFIO
function userReview(rate) {
    if (!rate) {
        console.log("O usuário não forneceu uma avaliação.");
    }
    else {
        if (rate === 1) {
            console.log("A avaliação foi '1', péssimo");
        }
        if (rate === 2) {
            console.log("A avaliação foi '2', ruim");
        }
        if (rate === 3) {
            console.log("A avaliação foi '3', mediano");
        }
        if (rate === 4) {
            console.log("A avaliação foi '4', bom");
        }
        if (rate === 5) {
            console.log("A avaliação foi '5', excelente");
        }
    }
}
userReview(1);
