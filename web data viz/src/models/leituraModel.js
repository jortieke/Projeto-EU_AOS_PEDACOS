var database = require("../database/config");


function listar(idUsuario) {
    var instrucao = `
            SELECT fkCapitulo AS capitulo,
                dtLeitura
            FROM leitura
                WHERE fkUsuario = ${idUsuario}
                ORDER BY dtLeitura;
    `;
    return database.executar(instrucao);
}

function salvar(idUsuario, capitulos) {
    if (capitulos.length === 0) {
        return Promise.resolve();
    }

    var values = "";
    
    for (var i = 0; i < capitulos.length; i++) {
        var c = capitulos[i];

        if (i === 0) {
            values = "(" + idUsuario + ", " + c + ")";
        } else {
            values = values + ",(" + idUsuario + ", " + c + ")";
        }
    }

    var inserir = `
        INSERT INTO leitura (fkUsuario, fkCapitulo)
        VALUES ${values};
    `;

    return database.executar(inserir);
}

function kpiMensal(idUsuario) {
    var instrucao = `
        SELECT 
            MONTH(dtLeitura) AS mes,
            COUNT(*) AS quantidade
        FROM leitura
        WHERE fkUsuario = ${idUsuario}
        GROUP BY MONTH(dtLeitura)
        ORDER BY mes;
    `;
    return database.executar(instrucao);
}

function taxaRetencaoMedia() {
    var instrucao = `
        SELECT 
            AVG(qtd / 110) AS retencaoMedia
        FROM (
            SELECT COUNT(*) AS qtd
            FROM leitura
            GROUP BY fkUsuario
        ) AS t;
    `;
    return database.executar(instrucao);
}


module.exports = {
    listar,
    salvar,
    kpiMensal,
    taxaRetencaoMedia
};
