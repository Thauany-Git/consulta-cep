
# Consulta CEP - API

Este projeto é uma aplicação simples em Node.js que consulta informações de endereço a partir de um CEP utilizando a biblioteca **CEP-Promise**. Ele é ideal para integrar consultas de CEP em aplicações web de forma rápida e eficiente.

## Funcionalidades

- Consultar informações de endereço a partir de um CEP.
- Retorno de dados completos e validados.
- Fácil de integrar com outras aplicações.

## Tecnologias Utilizadas

- **Node.js**: Plataforma para execução de JavaScript no servidor.
- **Express**: Framework web minimalista para criação de servidores HTTP.
- **CEP-Promise**: Biblioteca para consultas de CEP em múltiplos serviços.

## Instalação

Siga os passos abaixo para configurar o projeto localmente:

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/consulta-cep.git
   cd consulta-cep
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor**:
   ```bash
   node index.js
   ```

O servidor estará disponível em `http://localhost:3000`.

## Como Usar

1. Com o servidor em execução, acesse a seguinte rota no navegador ou use um cliente de API (como Postman ou Insomnia):
   ```
   GET http://localhost:3000/consulta/:cep
   ```
   Substitua `:cep` por um CEP válido. Exemplo:
   ```
   GET http://localhost:3000/consulta/01001000
   ```

2. A resposta será um JSON com os dados do endereço:
   ```json
   {
       "sucesso": true,
       "dados": {
           "cep": "01001-000",
           "state": "SP",
           "city": "São Paulo",
           "neighborhood": "Sé",
           "street": "Praça da Sé"
       }
   }
   ```

3. Em caso de erro, será retornada uma mensagem no formato:
   ```json
   {
       "sucesso": false,
       "mensagem": "Erro ao buscar o CEP. Verifique se o CEP está correto.",
       "erro": "Mensagem detalhada do erro"
   }
   ```
