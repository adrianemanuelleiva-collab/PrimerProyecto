const express = require("express");

const app = express();

app.use(express.json());

app.use(
    "/api/productos",
    require("./routes/productosRoutes")
);

app.listen(3001, () => {
    console.log("Servidor en puerto 3001");
});