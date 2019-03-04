require('dotenv').load();
const express = require('express')
const server = express();
const PORT = process.env.PORT || 8000

server.use(express.json())

const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: process.env.API_KEY,
  apiSecret: process.env.API_SECRET
})
 
const from = '13164531409'
const to = '14439778027'
const text = 'Hello from Nexmo'

nexmo.message.sendSms(from, to, text)

server.listen(PORT, function() {console.log(`Server is listening on port ${PORT}`)})
