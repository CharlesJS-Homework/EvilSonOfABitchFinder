const questions = require('../data/questions.js');

module.exports = (app, path) => {
  app.get('/survey', (req, res) => {
    res.render('survey.handlebars', { questions });
  });

  app.get('/survey.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/survey.js'));
  });

  app.get('/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/styles.css'));
  });

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));
  });
};
