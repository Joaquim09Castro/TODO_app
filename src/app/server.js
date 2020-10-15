console.log(__dirname);
// express import
const express = require('express'),
  bodyParser = require('body-parser'),
  methodOverride = require('method-override'),
  rotasTarefas = require('./routes/tasks.routes'),
  db = require('../config/database/database');

const app = express();

app.use('/static', express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(methodOverride(function (req, resp) {
  if (req.body && typeof req.body === 'object' && '_method' in req.body && req.body.taskId != "null") {
    
    //Troca o action do FORM para a rota correta
    req.url = '/editTask';

    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}))

// app initialization
rotasTarefas(app);

// server process
const port = process.env.PORT || 9000;

db.connect()
  .then(() => console.log('Database connected!'))
  .catch(err => console.error(err));

app.listen(port, () => console.log(`Server running on port ${port}`));