import React from "react";
import FirstComponent from "./components/FirstComponent";

function App() {
  // 1 - Variáveis 
  const name: string = "Netto";
  const age: number = 24;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`
  }

  return (
    <div className="App">
      <h1>TypeScript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Trabalhando?: {isWorking ? "Sim" : "Não"}</p>
      <h3>{userGreeting(name)}</h3>
      <FirstComponent/>
    </div>
  );
}

export default App;
