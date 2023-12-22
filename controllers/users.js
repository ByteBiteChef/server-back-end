import sqlite3 from "sqlite3";

let users;
/// exporta la funcion createUser que recive dos argumentos, req(la solicitud) y res(la respuesta). Crea el user
export const createUser = (req, res) => {
	console.log("the req is", req.body);
	const user = req.body;

	/// Declara la variable con el comando para insertar el usuario en la tabla.
	let sql = `INSERT INTO users(firstName, lastName, age, id) VALUES(?, ?, ?, ?)`;
	/// Asigna a la variable los valores que se agregaran a la tabla
	let params = [user.firstName, user.lastName, user.age, user.id];

	/// Ejecuta el metodo para agregar la row a la table de lo contrario console log error
	db.run(sql, params, function (error) {
		if (error) {
			return console.error(error.message);
		}
		console.log("Row was added to the table users");
	});

	res.send(`User with the name ${user.firstName} added to the database!`);
};
/// exporta la funcion getUsers. Esta funcion
export const getUsers = (req, res) => {
	res.send(users); /// envia una respuesta con el array de users
};
/// exporta la funcion getUser

export const getUser = (req, res) => {
	const { id } = req.params;
	let sql = `SELECT * FROM users WHERE id == ${id}`;

	db.get(sql, function (error, row) {
		if (error) {
			console.error(error.message);
		} else {
			res.send(row);
			console.log(row);
		}
	});
};

///exporta la funcion deleteUser
export const deleteUser = (req, res) => {
	const { id } = req.params; /// extrae el parametro id y lo guarda en la constante

	let del = `DELETE FROM users WHERE id == ${id}`;

	/// Ejecuta el metodo con el parametro "del" para borrar usuarios
	db.run(del, function (error) {
		if (error) {
			return console.error(error.message);
		}
		console.log(`Id: ${id} has been deleted`);
	});

	res.send(`User with the id ${id} deleted from the database.`); /// responde que el usuario ha sido eliminado
};
/// Exporta una función llamada updateUser
export const updateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.body;

	let upDate = `UPDATE users
SET firstName = ?, lastName = ?, age = ?
WHERE id == ?`;

	db.run(upDate, [firstName, lastName, age, id], function (error) {
		if (error) {
			return console.error(error.message);
		}
		console.log(`User with the id ${id} has been updated`);
	});

	res.send(`User with the id ${id} has been updated`);
};

const { verbose } = sqlite3;
const db = new (verbose().Database)("./DatabaseName.db", (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Connected to the database.");
});
