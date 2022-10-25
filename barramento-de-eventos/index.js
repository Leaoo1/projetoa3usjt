const express = require("express");
const bodyParser = require("body-parser");
//para enviar eventos para os demais microsserviços
const axios = require("axios");

const app = express();
app.use(bodyParser.json()); 

const eventos = [];

app.post("/eventos", (req, res) => {
  const evento = req.body;
  eventos.push(evento);
  //envia o evento para o microsserviço de cadastro
  axios.post("http://localhost:4000/eventos", evento);
  //envia o evento para o microsserviço de exames
  axios.post("http://localhost:5000/eventos", evento);
});

app.get("/eventos", (req, res) => {
  res.send(eventos);
});

app.listen(10000, () => {
  console.log("Barramento de eventos. Porta 10000.");
});