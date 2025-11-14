var livroModel = require("../models/livroModel");


function cadastrar(req, res) {
  var nota = req.body.nota;
  var idUsuario = req.body.idUsuario;

  if (nota == undefined) {
    res.status(400).send("nota está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {

    livroModel.cadastrar(nota, idUsuario)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarlivrosEmTempoReal(req, res) {

    var nota = req.params.nota;

    console.log(`Recuperando livros em tempo real`);

    livroModel.buscarlivrosEmTempoReal(nota).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas livros.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
     buscarlivrosEmTempoReal
}