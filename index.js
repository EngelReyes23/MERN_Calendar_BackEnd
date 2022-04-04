const express = require("express");

// Inicializa express
const app = express();

// Establece el puerto
app.listen(4000, () => {
	console.log(`Server on port ${4000}`);
});

// Ruta principal
app.get("/", (req, res) => {
	console.log("Petición GET a la ruta /");
	res.json({
		message: "Hola mundo",
	});
});
