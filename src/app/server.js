// express import
const express = require('express'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  rotasTarefas = require('./routes/tasks.routes');

const app = express();

app.use(cors());

app.use('/static', express.static(__dirname + '/public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false}));

// app initialization
rotasTarefas(app);

// server process
const port = 9000;
app.listen(port, () => console.log(`Server running`));