const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Pedido = db.define('pedido',{
    codPedido: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    item: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    clienteId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'clientes',
            key: 'codCliente'
        }
    }
},{
    tableName: 'pedidos',
    createdAt: false,
    updatedAt: false
})
module.exports = Pedido