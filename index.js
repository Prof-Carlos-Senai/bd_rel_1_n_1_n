const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const Cliente = require('./model/Cliente')
const Pedido = require('./model/Pedido')
const Produto = require('./model/Produto')
const controllerCliente = require('./controller/controllerCliente')

const PORT = 3000
const hostname = 'localhost'
// -------------------------------------------
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())
// -------------------------------------------

app.post('/cliente', controllerCliente.cadastrarCliente)
app.get('/cliente', controllerCliente.consultarCliente)
app.delete('/cliente/:id', controllerCliente.apagarCliente)
app.put('/cliente', controllerCliente.atualizarCliente)

app.get('/', (req,res)=>{
    res.status(200).json({message: "Aplicação rodando!"})
})

// -------------------------------------------
conn.sync().then(()=>{
    app.listen(PORT, hostname, ()=>{
        console.log(`Servidor rodando em ${hostname}:${PORT}`)
    })
}).catch((err)=>{
    console.error('Erro de conexão com o Banco de dados!',err)
})