const { Cliente, Pedido, Produto } = require('./model/associacao')
const conn = require('./db/conn')

async function syncDataBase(){
    try{
        await conn.sync({force: true})
        console.log('Criando tabelas e sincronizando o banco de dados!')
    }catch(err){
        console.error('Erro de conexão com o banco de dados!',err)
    }finally{
        conn.close()
        console.log('Fechando conexão com banco de dados!')
    }
}
syncDataBase()