import React from "react";

// 4 - Importação de componentes
import FirstComponent from "./components/FirstComponent";

// 5 - Desestruturando props
import SecondComponent from "./components/SecondComponent";
import Destructuring, { Category } from "./components/Destructuring";

// 6 - useState
import State from "./components/State";
import { createContext } from "react";
import Context from "./components/Context";

// 8 - Type
type textOrNull = string | null;

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

const contextValue: IAppContext = {
  language: "JavaScript",
  framework: "Express",
  projects: 5,
};

function App() {
  // 1 - Variáveis
  const name: string = "Netto";
  const age: number = 24;
  const isWorking: boolean = true;

  // 2 - Funções
  const userGreeting = (name: string): string => {
    return `Olá, ${name}!`;
  };
  // 8 - Type

  const myText: textOrNull = "Tem algum texto aqui";

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        <p>Trabalhando?: {isWorking ? "Sim" : "Não"}</p>
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Segundo" />
        <Destructuring
          title="Título"
          content="Esse é o conteúdo"
          commentsQty={4}
          tags={["Teste", "Destructuring", "Typescript"]}
          category={Category.TS}
        />
        <State />
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;
