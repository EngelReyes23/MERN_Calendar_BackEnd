const express = require('express');
const cors = require('cors');
require('dotenv').config();
//
const { dbConnection } = require('./database/config');

// Inicia express
const app = express();

dbConnection(); // DB

app.use(cors()); // CORS

// Directorio publico
app.use(express.static('./public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth')); // Auth
app.use('/api/events', require('./routes/events')); // Events

// Establece el puerto
app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`);
});
