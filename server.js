const express = require ('express')
const { criarBanco } = require('./database')

const app = express()

app.use(express.json())

 app.get('/',(req, res)=> {
    res.send(`
        <body>
       <h1> Abrigos </h1>
       <h2>Gestão de Abrigos<h2>
       <p> </p>
        </body>
        `)
 })
 const PORT = 3000
 app.listen(PORT, ()=> {
    console.log(`servidor rodando em http://localhost:${PORT}`)

 })
app.get("/banco", async (req,res) => {
   
const db = await criarBanco() 

const obanco = await db.all(`SELECT * FROM banco`)

res.json(obanco)

})


app.get("/banco/:id",async (req, res) =>{

   const { id } = req.params

   const db = await criarBanco()

const bancoEspecifico = await db.all(`SELECT * FROM banco WHERE id = ?`,[id])


res.json(bancoEspecifico)
})

 app.put("/banco/:id", async (req,res)=> {const { id }= req.parms

   

    const {status_resolucao} = req.body

    const db = await criarBanco()
    
    await db.run(`UPDATE banco
      SET descricao = ?`,[stats_resolucao])
   
   res.send(`o banco de ${id} foi atualízada com sucesso`)
   
   
   } )
  

 