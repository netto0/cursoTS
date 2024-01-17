export{}

//1: Arrays

let numbers: number[] = [1,2,3]

numbers.push(4)

console.log(numbers)

// 1.1: Outra sintaxe de arrays

const nums: Array<number> = [100, 200]
console.log(nums)

//2: Any

const arr1: any = [1, 'oi', true]
console.log(arr1)

//3: Tipos em parâmetros

function soma(a:number, b:number) {
    console.log(a+b)
}

soma(2,9)

//4: Retorno de função

function greeting(name: string):string {
    return `Olá ${name}`
}

console.log(greeting("Netto"))

//5: Funções anônimas

setTimeout(function() {
    const sallary: number = 1000

    // console.log(sallary)
}, 2000)

//6: Tipos de objeto

function passCoordinates(coord: {x: number, y: number}) {
    console.log("X coordinates: " + coord.x)
    console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 80}
passCoordinates(objCoord)

//7: Props opcionais

function showNumbers(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)
    c && console.log("C: " + c)
}

showNumbers(1,2,3)
showNumbers(9,10)

//8: Validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
    if(lastName !== undefined) {
        return (`Olá, ${firstName} ${lastName}, tudo bem?`)
    }
    
    return (`Olá, ${firstName}, tudo bem?`)

}

console.log(advancedGreeting('Orlandi', 'Netto'))
console.log(advancedGreeting('Pedro'))

//9: Union type

function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
}

//10: Avançando em union types

function showUserRole(role: boolean | string) {
    if(typeof role === "boolean") {
        return "Usuário não aprovado!"
    }

    return `A função do usuário é ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("CEO"))

//11: Type alias

type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("100")

//12: Interface

interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10,
    y: 15,
    z: 20
}

showCoords(coordObj)

//13: Interface X type alias
// Type alias = fixo
// Interface = incrementável

//14: Literal types

let test: "testando"

test = 'testando'

console.log(test)

function showDirection(direction: "left" | "right" | "center") {
    console.log(`A direção é: ${direction}`)
}

showDirection("left")


//15: Non null assertion operators

const p = document.getElementById("some-p")

console.log(p?.innerText)

//16: Bigint

let n: bigint

n = 1000n

//17: Symbol
// * Mesmo que duas variáveis possuam o mesmo valor, elas são consideradas únicas

let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)