const express = require('express');
const cepPromise = require('cep-promise');  
const app = express();
const port = 3000;


app.get('/consulta-cep/:cep', async (req, res) => {
  const { cep } = req.params; 

  try {
    const dadosCep = await cepPromise(cep);

    return res.json(dadosCep);
  } catch (error) {
 
    return res.status(400).json({ error: 'CEP inválido ou não encontrado' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});