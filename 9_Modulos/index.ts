// 1 - Importação de arquivos

import importGreet from "./greet";

importGreet()

// 2 - Import de variáveis

import {x} from "./variable"
console.log(x)

// 3 - Multiplas importações

import {a, b, myFunction} from './multiple'

console.log(a)
console.log(b)
myFunction()

// 4 - Alias

import { someName as name } from "./changeName";

console.log(name)

// 5 - Import all

import * as myNumbers from './numbers'

console.log(myNumbers)
console.log(myNumbers.n1)

// 6 - Importando tipos

import { Human } from './myType'

class User implements Human {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const joao = new User("João", 23)
console.log(joao)