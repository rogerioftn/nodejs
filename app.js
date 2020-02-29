var express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Func = require('./models/colaborador');
const db = require('./models/db');
const routes = require('./routes/admin');


var port = process.env.PORT || 3000; 
var app = express(),
path = require('path'),
publicDir = path.join(__dirname,'views');

const Sequelize = require ("sequelize")

	app.engine('handlebars', handlebars({defaultLayout: 'index'}))
	app.set('view engine', 'handlebars')
	
	//body parser
	app.use(bodyParser.urlencoded({extended : false}))
	app.use(bodyParser.json())

	app.use(express.static(publicDir))
	
	
	//use Grupo de Rotas
	app.use('/', routes)

app.listen(port);
module.exports = app;
