const express = require('express');
const Router = express();
const controller =require('../controller/controller')

Router.post('/register',controller.register)
Router.get('/participants',controller.getPraticipants)
Router.post('/add-result',controller.addResult)

module.exports = Router