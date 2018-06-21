const evilsobs = require('../data/evilsobs.js');

function diff(body, sob) {
  let d = 0;

  for (let i = 0; i < 10; i++) {
    d += Math.abs(parseInt(sob.scores[i]) - parseInt(body[`q${i}`]));
  }

  return d;
}

module.exports = (app) => {
  app.get('/api/evilsobs', (req, res) => {
    res.json(evilsobs);
  });

  app.post('/api/evilsobs', (req, res) => {
    let sob;

    evilsobs.forEach((each) => {
      const eachDiff = diff(req.body, each);

      if (!sob || (eachDiff < sob.diff)) {
        sob = {
          sob: each,
          diff: eachDiff,
        };
      }
    });

    res.render('result', sob.sob);
  });
};
