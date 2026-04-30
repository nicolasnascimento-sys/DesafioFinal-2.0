# 🚀Abrigos
## 📌sobre o projeto
o projeto Abrigos foi criado para ajudar pessoas vítimas de enchentes e se localizarem melhor

## 🛠️tecnologias utilizadas

- Node.js
- express
- sQlite
- sQlite3
- Postman

## 📦Instalação

`npm install`

## ⏩ Como executar

```
bash npm run dev 
```

` http://localhost:3000 `
[Clique aqui](http://localhost:3000)

---

## 🗄️ Banco de Dados

O banco de dados é criado automaticamente ao iniciar o projeto.

`database.db`

## 📄 tabela

|Campo   |Descrição  |
|--------|-----------|
|id      |idenficador único|
|abrigos |nome do abrigo   |
|localização|local aonde o abrigo está na cidade|
|abrigados  |quantidade de pessoas que estão no abrigo|
|voluntarios|quantidade de pessoas ajudando o abrigo  |
| veiculos  |para ajudar a chegar nos abrigos         |
|subrimendos|quantidade de alimento restante          |

---
 
## 🔗endpoints

### Rota Inicial

```http
GET /
 ```
 retorna uma página HTML símples com informaçoes da API

---

 ### Rota para listar todo

 ```http 
 GET /banco
 ```
 retorna todos os registros do banco de dados

 ---

 ### Rota para buscar um abrigo específico

 ```http 
 GET /banco/:id
 ```
 retorna todos os registros de um abrigo rspecífico

 Ex:/banco/4

---

 ## 📚 Conceitos

 Rotas com express

 ---

 ## 📝Prejeto Educacional

 este prejeto foi desenvolvido para fins de aprendizado em back-end com Node.js