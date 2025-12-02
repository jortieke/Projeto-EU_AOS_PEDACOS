var database = require("../database/config");

function registrar(fkUsuario, fkForum) {
    var instrucao = `
        INSERT INTO visualizacao (idVisualizacao, fkUsuario, fkForum)
        VALUES (DEFAULT, ${fkUsuario}, ${fkForum});
    `;
    return database.executar(instrucao);
}

function contarVisualizacoes(fkForum) {
    var instrucao = `
        SELECT COUNT(*) AS totalVisualizacoes
        FROM visualizacao
        WHERE fkForum = ${fkForum};
    `;
    return database.executar(instrucao);
}

module.exports = {
    registrar,
    contarVisualizacoes
};
