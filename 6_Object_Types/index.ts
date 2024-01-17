export{}

// 1 - Tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product){
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if(product.isAvailable){
    console.log("O produto está disponível")
  }
}

const tshirt:Product = {
  name: "Camisa",
  price: 4.99,
  isAvailable: true
}

showProductDetails(tshirt)

// 2 - Propriedades opcionais em interfaces

interface UserScnd {
  email: string,
  role?: string
}

function showUserDetails(user: UserScnd) {
  console.log(`O usuário tem o email: ${user.email}`)
  if(user.role) {
    console.log(`A função do usuário é ${user.role}`)
  }
}

const u1:UserScnd = {
  email: "emailteste@gmail.com",
  role: "CEO"
}

const u2:UserScnd = {
  email: "emailteste22@gmail.com"
}

showUserDetails(u1)
showUserDetails(u2)

// 3 - Readonly

interface Car {
  brand: string
  readonly wheels: number
}

const fusca:Car = {
  brand: "VW",
  wheels: 4
}

// 4 - Index signature

interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 19

console.log(coords)

// 5 - Extending interfaces

interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superPowers: string[]
}

const netto: Human = {
  name: "Netto",
  age: 24
}

const clark: SuperHuman = {
  name: "Clark",
  age: 982,
  superPowers: ["X-Ray vision"]
}

console.log(netto)
console.log(clark)

// 6 - Intersection types
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)

// 7 - Readonly array
// Não permite modificações diretas dos itens do array, apenas por meio de métodos como o map

let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

// myArray[2] = "Pera"

console.log(myArray)
myArray = myArray.map((item) => {return `Fruta: ${item}`})
console.log(myArray)

// 8 - Tuplas 
// Determinamos previamente por meio de um novo type a quantidade e o tipo de cada dado de um array
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]

// 9 - Tuplas com readonly

function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers([1,2])