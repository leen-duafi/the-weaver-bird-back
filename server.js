const express = require('express')
const app = express() 
const cors = require('cors');
app.use(cors())
app.use(express.json())
require('dotenv').config();
const axios = require('axios'); // require the package

 

app.get('/', (req, res) =>{ res.send('Hello World 👋🐦')})
 
app.listen(4040, () => {console.log(`you are listing to ${4040}`);})