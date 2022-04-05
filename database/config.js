const mongose = require("mongoose");

const dbConnection = async () => {
	try {
		await mongose.connect(process.env.DB_CNN);

		console.log("DB is connected");
	} catch (error) {
		console.log(error);
		throw new Error("Error inicializando la conexión a la base de datos");
	}
};

module.exports = {
	dbConnection,
};
