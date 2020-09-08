// app view import
const todoAppPageLoad = require('../views/template_todo_app'),
  card = require('../views/cardTemplate'),
  db = require('../data/db.json').data;
  
  

// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/:id', (req, resp) => {

    const user = req.params.id;

    for (let i = 0; i < db.length; i++) {
      if (user == db[i].name) {
        resp.send(
          todoAppPageLoad(
            db[i].tasks.map(tasks => card(tasks)).join('')
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
};