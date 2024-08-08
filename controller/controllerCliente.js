const { where } = require('sequelize')
const { Cliente } = require('../model/associacao')

const cadastrarCliente = async (req,res)=>{
    const valores = req.body
    try{
        const pesq = await Cliente.create(valores, { raw: true})
        console.log(pesq)
        res.status(201).json(pesq)
    }catch(err){
        console.error('Não foi possível cadastrar o cliente!',err)
        res.status(500).json({message: "Não foi possível cadastrar o cliente!"})
    }
}

const consultarCliente = async (req,res)=>{
    const valor = req.query
    console.log(valor)
    try{
        const pesq = await Cliente.findOne({where: { nome: valor.nome}})
        if(pesq === null){
            console.log(pesq)
            res.status(404).json({message: "Cliente não encontrado!"})
        }else{
            res.status(200).json(pesq)
        }
    }catch(err){
        console.error('Não foi possível consultar o cliente!',err)
        res.status(500).json({message: "Não foi possível constultar o cliente!"})
    }
}

const apagarCliente = async (req,res)=>{
    const valor = req.params
    console.log(valor)
    try{
        const pesq = await Cliente.findByPk(valor.id)
        if(pesq === null){
            res.status(404).json({message: "Cliente não encontrado!"})
        }else{
            await Cliente.destroy({where: {codCliente: valor.id}})
            res.status(200).json({message: "cliente excluído do banco de dados!"})
        }
    }catch(err){
        console.error('Não foi possível apagar cliente!',err)
        res.status(500).json({message: "Não foi possível apagar o cliente!"})
    }
}

const atualizarCliente = async (req,res)=>{
    const valor = req.body
    console.log(valor)
    try{
        const pesq = await Cliente.findByPk(valor.codCliente)
        if(pesq === null){
            res.status(404).json({message: "cliente não encontrado!"})
        }else{
            await Cliente.update(valor, {where:{ codCliente: valor.codCliente}})
            const pesq2 = await Cliente.findByPk(valor.codCliente)
            res.status(200).json(pesq2)
        }
    }catch(err){
        console.error('Não foi possível atualizar cliente!',err)
        res.status(500).json({message: "Não foi possível atualizar o cliente!"})
    }
}

module.exports = { cadastrarCliente, consultarCliente, apagarCliente, atualizarCliente }