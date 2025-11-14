CREATE DATABASE euaospedacos;

USE euaospedacos;

CREATE TABLE usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(45) NOT NULL UNIQUE,
    cpf CHAR(11) NOT NULL UNIQUE,
    senha VARCHAR(45) NOT NULL,
    newsletter VARCHAR(5)
);


CREATE TABLE livro(
	idLivro INT PRIMARY KEY AUTO_INCREMENT,
    nota INT NOT NULL
		CONSTRAINT chkNota
			CHECK (nota IN (1, 2, 3, 4, 5)),
	fkUsuario INT UNIQUE,
		CONSTRAINT fkLivroUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario)
);

CREATE TABLE forum(
	idForum INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    fkUsuario INT UNIQUE,
		CONSTRAINT fkForumUsuario
			FOREIGN KEY (fkUsuario)
				REFERENCES usuario(idUsuario)
);

SELECT AVG(nota) FROM livro;

SELECT * FROM usuario;