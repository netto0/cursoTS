"use strict";
// export{}
// 1 - Campos
class User {
}
const netto = new User();
console.log(netto);
netto.name = "Netto";
// netto.job = "Programmer"
console.log(netto);
// 2 - Constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const pedro = new NewUser("João", 23);
// 3 - Campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const celta = new Car("Celta");
console.log(celta);
// 4 - Herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
console.log(trator);
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(destroyer);
// 5 - Métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy);
jimmy.greeting();
// 6 - This
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - Getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return `${this.name} ${this.surname}`;
    }
}
const orlandiNetto = new Person("Orlandi", "Netto");
console.log(orlandiNetto);
console.log(orlandiNetto.name);
console.log(orlandiNetto.surname);
console.log(orlandiNetto.fullName);
// 8 - Setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} | Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillX = 15;
myCoords.fillY = 0;
myCoords.fillY = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInteface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
const teste = new TestingInteface("Teste");
console.log(myPost.itemTitle());
console.log(teste.itemTitle());
// 10 - Override
class Base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("Outra coisa");
    }
}
const myObj = new Nova();
myObj.someMethod();
// 11 - Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new C();
const dInstance = new D();
console.log(cInstance.x);
console.log(dInstance.x);
// 12 - Protected (só podem ser acessadas usando métodos)
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
}
const fInstance = new F();
fInstance.showX();
// 13 - Private (só podem ser acessados na classe e por meio de métodos)
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name)
console.log(pObj.showName());
// 14 - Static members
class StaticMembers {
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
// 15 - Generic Class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem);
// 16 - Parameter properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
}
const newShirt = new ParameterProperties("Camisa", 5, 20);
console.log(newShirt.name);
// 17 - Class Expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Joao");
console.log(pessoa.name);
// 18 - Abstract class
class AbstractClass {
}
// const novo = new AbstractClass()
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é ${this.name}`);
    }
}
const newAbstractObj = new AbstractExample("Kleber");
newAbstractObj.showName();
// 19 - Relações entre classes
class Dog {
}
class Cat {
}
const zubu = new Cat();
console.log(zubu);
