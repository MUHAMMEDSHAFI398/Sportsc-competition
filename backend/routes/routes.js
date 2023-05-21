const express = require('express');
const Router = express();
const controller =require('../controller/controller')

Router.post('/register',controller.register)

module.exports = Router