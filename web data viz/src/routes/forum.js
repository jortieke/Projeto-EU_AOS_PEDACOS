var express = require("express");
var router = express.Router();
var forumController = require("../controllers/forumController");

router.get("/kpis/:idUsuario", forumController.kpisForum);
router.get("/post-mais-relevante/:idUsuario", forumController.postMaisRelevante);


router.post("/curtir", forumController.curtir);
router.post("/visualizar", forumController.visualizar);
router.post("/criar", forumController.criar);
router.get("/listar", forumController.listar);

module.exports = router;
