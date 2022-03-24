const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const roomController = require('./controllers/roomController')
const route = express.Router();

route.get('/', (req,res)=> res.render("index", {page:"enter-room"}))
route.get('/create-pass', (req,res)=> res.render("index",{page: 'create-pass'}))


/*room */
route.get('/room/:room', (req,res)=> res.render("room"))


//formato que o formalario tem que passar dados pra modal
route.post('/question/:room/:question/:actions', QuestionController.index)
route.post('/create-room',roomController.create)


module.exports = route