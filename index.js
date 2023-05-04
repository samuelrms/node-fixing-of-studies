const { log } = require('console');
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'))

let tasks = [
  'Análise e Levantamento de Requisitos de Software',
  'Criação de Aplicações e Sistemas'
]

app.post('/', (req, res) => {
  tasks.push(req.body.task)

  res.render('index', { nome: 'Samuel', tasksList: tasks })
})

app.get('/', (_, res) => {
  res.render('index', { nome: 'Samuel', tasksList: tasks })
})

app.get('/delete/:id', (req, res) => {
  tasks = tasks.filter((data, i) => {
    if (i != req.params.id) return data
  })

  res.render('index', { nome: 'Samuel', tasksList: tasks }, () => {
    res.redirect('/')
  })
})

app.listen(8080, () => {
  log("start server")
})