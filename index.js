const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();

// Inicia express
const app = express();

// DB
dbConnection();

// CORS
app.use(cors());

// Establece el puerto
app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});

// Lectura y parseo del body
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

// Directorio publico
app.use(express.static('./public'));
