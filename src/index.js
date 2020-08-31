const express = require('express'),
  todoApp = require('./views/template_todo_app');

const app = express();
const port = 3000;

app.get('/', (req, resp) => {
  resp.send(todoApp);
});

app.listen(port, () => console.log("Server running"));