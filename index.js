const express = require("express");
require("dotenv").config();

// Inicializa express
const app = express();

// Establece el puerto
app.listen(process.env.PORT, () => {
	console.log(`Server on port ${process.env.PORT}`);
});

app.use("/api/auth", require("./routes/auth"));

// Directorio publico
app.use(express.static("./public"));
