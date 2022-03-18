require("dotenv").config()

const express = require("express")
const connectDB = require("./database/connection")
const app = express()

// forma de ler json / middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// rotas
const inicialRouter = require("./routes/inicial")
app.use("/", inicialRouter)

const usuariosRouter = require("./routes/usuarios")
app.use("/usuarios", usuariosRouter)

// banco de dados
connectDB()

// porta
const porta = process.env.PORT || 8080
app.listen(porta, () => {
    console.log(`servidor ok .. http://localhost:${porta}`)
})