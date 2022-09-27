const express = require ('express')
const app = express()
app.use(express.json())
//contador de cadastros; a cada cadastro ele é incrementado
contador = 0
const cadastros = {}

//armazenar um novo cadastro
//POST localhost:4000/cadastros {texto: "Fulano da Silva Santos"}

//endpoint para armazenamento de cadastros
/*a base é assim:
  {
    1: {
      contador: 1, texto: 'Fulano da Silva Santos'
    },
    2: {
      contador: 2, texto: 'Ciclano Beltrano Oliveira'
    }
  }
*/
app.post ('/cadastros', (req, res) => {
  contador++
  const texto = req.body.texto
  lembretes[contador] = {contador, texto}
  //201 Created OK
  res.status(201).send(cadastros[contador])
})

//obter a lista completa dos cadastros
//GET localhost:4000/cadastros

//endpoint para obtenção da lista dos cadastros
app.get('/cadastros', (req, res) => {
  console.log('executando...')
  res.send(cadastros)

})

app.listen(4000, () => console.log("Cadastros. Porta 4000."))