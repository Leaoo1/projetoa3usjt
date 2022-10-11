const express = require('express')
const {v4: uuidv4} = require ('uuid')
const app = express()
app.use(express.json())

const examesPorCadastroId = {}

//localhost:5000/cadastros/abcd/exames
app.post('/cadastros/:id/exames', (req, res) => {
  const idObs = uuidv4()
  const { texto } = req.body
  const examesDoCadastro = examesPorCadastroId[req.params.id] || []
  examesDoCadastro.push({id: idObs, texto})
  examesPorCadastroId[req.params.id] = examesDoCadastro
  //201: CREATED
  res.status(201).send(examesDoCadastro)
})

//localhost:5000/lembretes/:id/observacoes
app.get('/cadastros/:id/exames', (req, res) => {
  res.send(examesPorCadastroId[req.params.id] || [])
})


app.listen(5000, () => console.log('Exames. Porta 5000.'))