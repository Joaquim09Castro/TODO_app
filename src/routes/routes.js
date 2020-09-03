// app view import
const todoAppPageLoad = require('../views/template_todo_app'),
  card = require('../views/cardTemplate'),
  bd = require('../data/bd');

let tarefas = {
  "title": "Dentista",
  "desc": "Ir ao dentista dia 03/09 às 18:00"
};

// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/:id', (req, resp) => {

    const user = req.params.id;

    for (let i = 0; i < bd.length; i++) {
      if (user == bd[i].name) {
        resp.send(
          todoAppPageLoad(
            bd[i].tasks.map(tasks => card(tasks)).join('')
          )
        )
        break;
      }
    }
  });

  // nodemon test page
  app.post('/nodemon', (req, resp) => {
    resp.send('<h1>Rota testada utilizando nodemon</h1>')
  })
}