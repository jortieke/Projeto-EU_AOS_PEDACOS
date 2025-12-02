var leituraModel = require("../models/leituraModel");

function listar(req, res) {
    var idUsuario = req.params.idUsuario;

    leituraModel.listar(idUsuario)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log("Erro ao listar leitura:", erro);
            res.status(500).json(erro);
        });
}

function salvar(req, res) {
    var idUsuario = req.body.idUsuario;
    var capitulos = req.body.capitulos;

    if (!idUsuario || !Array.isArray(capitulos)) {
        res.status(400).send("Dados inválidos");
        return;
    }

    leituraModel.salvar(idUsuario, capitulos)
        .then(() => res.status(200).json({ mensagem: "OK" }))
        .catch(erro => {
            console.log("Erro ao salvar leitura:", erro);
            res.status(500).json(erro);
        });
}

function kpiMensal(req, res) {
    var idUsuario = req.params.idUsuario;

    leituraModel.kpiMensal(idUsuario)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log("Erro ao montar KPI mensal:", erro);
            res.status(500).json(erro);
        });
}


module.exports = {
    listar,
    salvar,
    kpiMensal
};
