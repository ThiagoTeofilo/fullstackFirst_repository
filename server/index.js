require("dotenv").config()

const express = require("express")
const connectDB = require("./database/connection")
const bodyparser = require("body-parser")
const cors = require('cors')
const app = express()

// forma de ler json / middlewares
// app.use(express.urlencoded({extended: true}))
app.use(bodyparser.urlencoded({extended: true}))
app.use(express.json())

app.use(cors())

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