import { v4 as uuidv4 } from "uuid"; /// importa la funcion v4 y la renombra a uuidv4. Es para generar ids

let users = [
	{
		firstName: "John",
		lastName: "Doe",
		age: 25,
	},
	{
		firstName: "Nun",
		lastName: "Ve",
		age: 35,
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
	const { id } = req.params; /// extrae el parametro id y lo guarda en la constante
	const { firstName, lastName, age } = req.body; /// extrae las propiedades firstName, lastName y age y los guarda en un aconstante
	const user = users.find((user) => user.id == id); ///busca en el array un usuario con el mismo id al de la solicitud

	if (firstName) user.firstName = firstName; /// si se ingresa firstName en la solicitud se reasigna el valor
	if (lastName) user.lastName = lastName; /// si se ingresa lastName en la solicitud se reasigna el valor
	if (age) user.age = age; /// si se ingresa age en la solicitud se reasigna el valor

	res.send(`User with the id ${id} has been updated`); /// envia una respuesta diciendo que el usuario se actualizo
};
