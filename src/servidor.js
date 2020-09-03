// express import
const express = require('express'),
  // routes import
  rotasTarefas = require('./routes/routes');

const app = express();
const port = 3000;

// app initialization
rotasTarefas(app);

// server process
app.listen(port, () => console.log(`Server running`));