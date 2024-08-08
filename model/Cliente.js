const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Cliente = db.define('cliente',{
    codCliente: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING(14),
        allowNull: false,
        unique: true
    }
},{
    tableName: 'clientes',
    createdAt: false,
    updatedAt: false
})
module.exports = Cliente