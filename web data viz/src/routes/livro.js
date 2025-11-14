var express = require("express");
var router = express.Router();

var livroController = require("../controllers/livroController");

router.get("/tempo-real/:idAquario", function (req, res) {
    livroController.buscarlivrosEmTempoReal(req, res);
})

module.exports = router;