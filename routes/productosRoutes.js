const express = require("express");

const router = express.Router();

const ctrl = require("../controllers/productosController");

router.get("/", ctrl.obtener);

router.get("/:id", ctrl.obtenerUno);

router.post("/", ctrl.crear);

module.exports = router;