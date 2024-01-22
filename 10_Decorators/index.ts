// 1 - Exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator")
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("Executando decorator")
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
  }
}


class myClass {
  @myDecorator()
  testing() {
    console.log("terminando execução do método")
  }
}

const myObj = new myClass()

myObj.testing()

// 2 - Múltiplos decorators

function a() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou a.')
  }
}

function b() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('executou b.')
  }
}

class MultipleDecorators {
  @a()
  @b ()
  testing() {
    console.log("Terminando execução")
  }
}

// 3 - Class decorator
function classDec(constructor: Function) {
  console.log(constructor)
  if(constructor.name === "User") {
    console.log("Criando usuário")
  }
}

@classDec
class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

const matheus = new User("Matheus")

console.log(matheus)