// export{}
// 1 - Campos

class User {
    name!: string
    age!: number
}

const netto = new User()

console.log(netto)

netto.name = "Netto"
// netto.job = "Programmer"

console.log(netto)

// 2 - Constructor

class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const pedro = new NewUser("João", 23)

// 3 - Campo readonly

class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}

const celta = new Car("Celta")

console.log(celta)

// 4 - Herança e super

class Machine {
    name

    constructor(name: string) {
        this.name = name
    }
}

const trator = new Machine("Trator")

console.log(trator)

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(destroyer)

// 5 - Métodos

class Dwarf {
    name

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy)
jimmy.greeting()

// 6 - This

class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - Getters

class Person {
    name
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

const orlandiNetto = new Person("Orlandi", "Netto")

console.log(orlandiNetto)
console.log(orlandiNetto.name)
console.log(orlandiNetto.surname)
console.log(orlandiNetto.fullName)

// 8 - Setters

class Coords {
    x!: number
    y!: number

    set fillX(x: number) {
        if(x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso")
    }

    set fillY(y: number) {
        if(y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso")
    }

    get getCoords() {
        return `X: ${this.x} | Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 15
myCoords.fillY = 0
myCoords.fillY = 10

console.log(myCoords)
console.log(myCoords.getCoords)

// 9 - Implements

interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`
    }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

class TestingInteface implements showTitle {
    title
    
    constructor(title: string) {
        this.title = title
    }
    
    itemTitle(): string {
        return `O título é: ${this.title}`
    }
}

const teste = new TestingInteface("Teste")
console.log(myPost.itemTitle())
console.log(teste.itemTitle())

// 10 - Override

class Base {
    someMethod() {
        console.log("Alguma coisa")
    }
}

class Nova extends Base {
    someMethod() {
        console.log("Outra coisa")
    }
}

const myObj = new Nova()

myObj.someMethod()