const sqlite3 = require('sqlite3')
const {open} = require ('sqlite')
const criarBanco = async () => {
const db = await open({
    filename:'./database.db',
    driver: sqlite3.Database
})


await db.exec(`
  CREATE TABLE IF NOT EXISTS banco(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  abrigos TEXT,              ---N,S,L,O
  localizacao TEXT,          ---Norte,Sul,Leste,Oeste
  abrigados TEXT,            ---1 Até 1000
  voluntarios TEXT,          ---1 até 500
  veiculos TEXT,             ---1 até 300
  subrimendos TEXT           ---Faltando,Pouco,ok ainda,Muito,
  stats_resolucao TEXT DEFAULT 'abrigo cheinho'
  )
 `)
 
console.log("Banco de dados correto!!!")

await db.exec(`
    INSERT INTO banco(abrigos,localizacao,abrigados,voluntarios,veiculos,subrimendos)
    VALUES('N','Norte','900','500','200','ok ainda'),
    ('S','Sul','1000','500','300','muito'),
    ('L','Leste','500','100','50','pouco'),
    ('O','Oeste','750','200','20','faltando')
    `);
      

const todoOBanco = await db.all('SELECT * FROM banco')
console.table(todoOBanco)

};

criarBanco();