const express = require("express");
require("dotenv").config();

// Inicializa express
const app = express();

// Establece el puerto
app.listen(process.env.PORT, () => {
	console.log(`Server on port ${process.env.PORT}`);
});

// Ruta principal
// app.get("/", (req, res) => {
// 	console.log("Petición GET a la ruta /");
// 	res.json({
// 		message: "Hola mundo",
// 	});
// });

// Directorio publico
app.use(express.static("./public"));
