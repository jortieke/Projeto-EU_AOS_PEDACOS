var database = require("../database/config");

function buscarlivrosEmTempoReal(nota) {

    var instrucaoSql = `SELECT AVG(${nota}) FROM livro;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarlivrosEmTempoReal
}