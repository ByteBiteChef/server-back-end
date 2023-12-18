/// importa express que es un framework para node.js
import express from "express";
/// importa body-parser module, analiza las request en un middleware
import bodyParser from "body-parser";
/// importa modulo userRouter desde user.js del archivo routes. Contine los routes.
import usersRoutes from "./routes/users.js";

/// This line is creating an instance of an Express application. The `express()` function is a top-level function exported by the Express module.
const app = express();
/// Declara el valor del numero de puerto donde el servidor recive las request
const PORT = 4000;


/// Esta línea dice a la aplicación que utilice el middleware body-parser para analizar las request entrantes en JSON
app.use(bodyParser.json());
/// La app usa las rutas definidas en userRoutes
app.use("/users", usersRoutes);
/// Define la ruta Get para la ruta ("/"), cuando se accede a la ruta hace el console.log
app.get("/", (req, res) => {
	res.send("hello from homepage");
});
/// Se inicia el servidor y muestra en la consola que funciona.
app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost;${PORT}`)
);
