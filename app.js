const express = require("express");
const app = express();

//Para poder recibir jsons
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cargar rutas
const home_routes = require("./routes/home");
const task_routes = require("./routes/task");

//Rutas base /api delante de las rutas
app.use("/api", home_routes);
app.use("/api", task_routes);

module.exports = app;