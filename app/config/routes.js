// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

module.exports = function(app){
	app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/index.html'));
	})
	app.get('/about', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/about.html'));		
	})
	app.get('/portfolio', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/portfolio.html'));		
	})
	app.get('/contact', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/contact.html'));		
	})	
}