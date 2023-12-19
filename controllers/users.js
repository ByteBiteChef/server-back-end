import { v4 as uuidv4 } from "uuid"; /// importa la funcion v4 y la renombra a uuidv4. Es para generar ids

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
	console.log("the req is", req.body)
	const user = req.body; ///extrae el cuerpo de la solicitud y lo almacena en una constante llamada user.
	users.push({ ...user, id: uuidv4() }); /// Añade un nuevo objeto al array users y le agrega un id con la funcion uuidv4.
	res.send(`User with the name ${user.firstName} added to the database!`); /// envia una respuesta diciendo que el user fue creado
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
	console.log("req from updateUser", req.body)
	console.log("updateUser function called");
	const { id } = req.params;
	console.log("id:", id);
	const { firstName, lastName, age } = req.body;
	console.log("firstName:", firstName, "lastName:", lastName, "age:", age);
	console.log(req.body)
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
