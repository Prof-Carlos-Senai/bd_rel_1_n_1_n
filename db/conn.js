const {Sequelize} = require('sequelize')
const sequelize = new Sequelize('rel_1_n_1_n','root','senai',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('Conexão com banco de dados com sucesso!')
}).catch((err)=>{
    console.error('Não foi possível conectar com banco de dados!',err)
})
module.exports = sequelize