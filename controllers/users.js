import sqlite3 from "sqlite3";

let users = [
	{
		firstName: "John",
		lastName: "Doe",
		age: 25,
		id: 28,
	},
	{
		firstName: "Nun",
		lastName: "Ve",
		age: 35,
		id: 29,
	},
]; /// crea un array vacio
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
	const { id } = req.params; /// extrae el parametro id y lo guarda en la constante
	const foundUser = users.find((user) => user.id == id); /// busca en el array de users un usuario con el mismo id que el de la request y lo almacena
	res.send(foundUser); /// envia una respuesta con el usuario encontrado
};
///exporta la funcion deleteUser
export const deleteUser = (req, res) => {
	const { id } = req.params; /// extrae el parametro id y lo guarda en la constante
	users = users.filter((user) => user.id !== id); /// Filtra el array users y saca el usuario con id sea igual al id extraído de la solicitud. El resultado se almacena de nuevo en la variable users.

	res.send(`User with the id ${id} deleted from the database.`); /// responde que el usuario ha sido eliminado
};
/// Exporta una función llamada updateUser
export const updateUser = (req, res) => {
	console.log("req from updateUser", req.body);
	console.log("updateUser function called");
	const { id } = req.params;
	console.log("id:", id);
	const { firstName, lastName, age } = req.body;
	console.log("firstName:", firstName, "lastName:", lastName, "age:", age);
	console.log(req.body);
	const user = users.find((user) => user.id == id);
	console.log("user:", user);

	if (firstName) {
		user.firstName = firstName;
		console.log("Updated firstName:", user.firstName);
	}
	if (lastName) {
		user.lastName = lastName;
		console.log("Updated lastName:", user.lastName);
	}
	if (age) {
		user.age = age;
		console.log("Updated age:", user.age);
	}

	res.send(`User with the id ${id} has been updated`);
	console.log(`User with the id ${id} has been updated`);
};

const { verbose } = sqlite3;
const db = new (verbose().Database)("./DatabaseName.db", (err) => {
	if (err) {
		console.error(err.message);
	}
	console.log("Connected to the database.");
});
