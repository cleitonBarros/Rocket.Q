const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const roomController = require('./controllers/roomController')
const route = express.Router();

route.get('/', (req,res)=> res.render("index", {page:"enter-room"}))
route.get('/create-pass', (req,res)=> res.render("index",{page: 'create-pass'}))


/*room */
route.get('/room/:room', roomController.open)
route.post('/create-room',roomController.create)
route.post('/enterroom',roomController.enter)


//formato que o formalario tem que passar dados pra modal
route.post('/question/create/:room', QuestionController.create)
route.post('/question/:room/:question/:actions', QuestionController.index)


module.exports = route