const service = require("../services/productosService");

const obtener = (req, res) => {
    const productos = service.obtenerTodos();
    res.json(productos);
};

const obtenerUno = (req, res) => {
    const { id } = req.params;
    const producto = service.obtenerPorId(id);
    res.json(producto);
};

const crear = (req, res) => {
    const nuevo = service.crear(req.body);
    res.status(201).json(nuevo);
};

module.exports = { obtener, obtenerUno, crear };