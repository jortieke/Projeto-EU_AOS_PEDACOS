var database = require("../database/config");

function enviar(idUsuario, idLivro, nota) {
    var sql = `
        INSERT INTO avaliacao (fkUsuario, fkLivro, nota)
        VALUES (${idUsuario}, ${idLivro}, ${nota});
    `;
    return database.executar(sql);
}

function media() {
    var sql = `
        SELECT ROUND(AVG(nota), 2) AS media
        FROM avaliacao
        WHERE fkLivro = 1;
    `;
    return database.executar(sql);
}

module.exports = { enviar, media };