const { Sequelize, Model, DataTypes } = require('sequelize');

(async () => {
	const Func = require('./models/colaborador');
const colaborador = await Func.create({	
	nome: "roger", 
	nome_pai: "Pedro", 
	nome_mae: "Maria",
	rg: "Pedro",
	cpf: "2984",
	dt_nasc :  new Date(1980, 6, 20),
	cnh : "a d b",
	atec_criminal_estadual : "a d b",
	atec_criminal_federal: "a d b",
	cargo : "motorista",
	cart_trabalho :"a d b",
	cert_negativa_estd :"a d b",
	cert_negativa_feder : "a d b",
	foto : "a d b",
	createdAt : new Date(),
	updatedAt : new Date()
  });
  console.log(colaborador.toJSON());
})();