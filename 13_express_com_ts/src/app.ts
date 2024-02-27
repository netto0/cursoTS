// 1 - Iniciando projeto
console.log("Express + TS")

// 2 - Init express
import express, {Request, Response} from 'express'

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res.send("Hello Express!")
})

// 3 - Rota com POST

app.post("/api/product", (req,res) => {
    console.log(req.body)
    return res.send("Produto adicionado!")
})

// 4 - Rota para todos os verbos

app.all("/api/product/check",(req,res) => {
    if(req.method === "POST") {
        res.send("Inseriu algum registro!")
    } else if (req.method === "GET") {
        res.send("Leu algum registro!")
    } else {
        res.send("Não podemos realizar esta operação!")
    }
})

// 5 - Interfaces do express
app.get("/api/interfaces", (req: Request, res: Response) => {
    return res.send("Utilizando as interfaces")
})

// 6 - Enviando JSON
app.get("/api/json", (req: Request, res: Response) => {
    return res.json({
        name: "Shirt",
        price: 30.00,
        color: "Blue",
        sizes: ["P", "M", "G"]
    })
})

// 7 - Router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
    console.log(req.params)

    const id = req.params.id

    if(id === "1") {
        res.send("Produto 1")
    } else {
        res.send("Produto não encontrado")
    }
})

app.listen(3000, () => {
    console.log("Aplicação de TS + Express está funcionando!")
})