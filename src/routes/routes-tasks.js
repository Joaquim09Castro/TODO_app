// app view import
const todoApp = require('../views/template_todo_app');

// PATH exports
module.exports = (app) => {
  // Home page
  app.get('/home', (req, resp) => {
    resp.send(todoApp);
  });
  
  // nodemon test page
  app.get('/nodemon', (req,resp) => {
    resp.send('<h1>Rota testada utilizando nodemon</h1>')
  })
}