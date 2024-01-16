// 1 - Generics

function showData<T>(arg: T): string {
  return `O dado é ${arg}`
}

console.log(showData(2))
console.log(showData("ola mundo"))
console.log(showData(false))

// 2 - Constraint em generics

function showProductName<T extends {name: string}>(obj: T) {
  return `O nome do produto é ${obj.name}`
}

console.log(showProductName({name:"Camisa", price: 12.99}))
// console.log(showProductName({price: 12.99}))

// 3 - Generics com interface

interface MyObject<T, U, W> {
  name: string
  wheels: T
  engine: U
  color: W
}

type Vehicle = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const myCar: Vehicle = {name: "Fusca", wheels:4, engine:1.0, color: "Gray"}
const myPen: Pen = {name: "BIC", wheels:false, engine:false, color: "Blue"}

console.log(myCar)
console.log(myPen)

// 4 - Type Parameters

function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${[key]} está presente no objeto e tem o valor de ${obj[key]}`
}

const server = {
  hd: '5TB',
  ram: '64GB'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste'))

// 5 - Keyof type operator

type Driver = {name: string, age: number, hasDriveLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
  return `${obj[name]}`
}

const myChar: Driver = {
  name: "Netto",
  age: 24,
  hasDriveLicense: true
}

console.log(showCharName(myChar, 'name'))

// 6 - Typeof type operator

const userName: string = "Netto"

const userName2: typeof userName = "Pedro"

// const userName3: typeof userName = 34

type x = typeof userName

const userName4: x = "Joaquim"

// 7 - Indexed acess type

type Truck = {km: number, kg: number, description: string}

type Km = Truck['km']

const newTruck: Truck = {
  km: 10000,
  kg: 2000,
  description: "Utilizado para pouca carga"
}

function showKm(km: Km) {
  console.log(`O veículo tem ${km} Kms`)
}

showKm(newTruck.km)

const newCar = {
  km: 3000,
  kg: 1000
}

showKm(newCar.km)

// 8 - Conditional types

interface A {}
interface B extends A {}

type myType = B extends A ? number : string

const someVar: myType = 5

// 9 - Template literals type

type testA = "text"
type CustomType = `some ${testA}`

const testing: CustomType = "some text"