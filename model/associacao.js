const Cliente = require('./Cliente')
const Pedido = require('./Pedido')
const Produto = require('./Produto')

Cliente.hasMany(Pedido,{
    foreignKey: 'clienteId',
    as: 'pedidos',
    onDelete: 'CASCADE'
})
Pedido.belongsTo(Cliente,{
    foreignKey: 'clienteId',
    as: 'cliente',
    allowNull: false
})

Pedido.hasMany(Produto,{
    foreignKey: 'pedidoId',
    as: 'produtos',
    onDelete: 'CASCADE'
})
Produto.belongsTo(Pedido,{
    foreignKey: 'pedidoId',
    as: 'pedido'
})

module.exports = { Cliente, Pedido, Produto }