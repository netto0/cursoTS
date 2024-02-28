// 1 - Iniciando projeto
console.log("Express + TS");

// 2 - Init express
import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  return res.send("Hello Express!");
});

// 3 - Rota com POST

app.post("/api/product", (req, res) => {
  console.log(req.body);
  return res.send("Produto adicionado!");
});

// 11 - Middlewares para todas as rotas
function showPath(req: Request, res: Response, next: NextFunction) {
  console.log(req.path);
  next();
}

app.use(showPath);

// 4 - Rota para todos os verbos

app.all("/api/product/check", (req, res) => {
  if (req.method === "POST") {
    res.send("Inseriu algum registro!");
  } else if (req.method === "GET") {
    res.send("Leu algum registro!");
  } else {
    res.send("Não podemos realizar esta operação!");
  }
});

// 5 - Interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("Utilizando as interfaces");
});

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    name: "Shirt",
    price: 30.0,
    color: "Blue",
    sizes: ["P", "M", "G"],
  });
});

// 7 - Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params);

  const id = req.params.id;

  if (id === "1") {
    res.send("Produto 1");
  } else {
    res.send("Produto não encontrado");
  }
});

// 8 - Rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  const id = req.params.id;
  const reviewId = req.params.reviewId;

  return res.send(`ID: ${id}\nReviewID: ${reviewId}`);
});

app.listen(3000, () => {
  console.log("Aplicação de TS + Express está funcionando!");
});

// 9 - Router Handler
function getUser(req: Request, res: Response) {
  return res.send(`O usuário ${req.params.id} foi encontrado`);
}

// 10 - Middlewares
function checkUser(req: Request, res: Response, next: NextFunction) {
  if (req.params.id === "1") {
    return res.send("Pode seguir!");
    next();
  } else {
    return res.send("Acesso restrito!");
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "Bem vindo a área administrativa!" });
});

app.get("/api/user/:id", getUser);

// 12 - Req e Res com generics
app.get(
  "/api/user/:id/details/:name",
  (
    req: Request<{ id: string; name: string }>,
    res: Response<{ status: boolean }>
  ) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`Name: ${req.params.name}`)

    return res.json({status: true})
  }
);

// 13 - Tratando erros
app.get("/api/error", (req: Request, res: Response) => {
    try {
        //Lógica
        throw new Error("Algo deu errado")
    } catch(e: any) {
        res.status(500).json({msg: e.message})
    }
})