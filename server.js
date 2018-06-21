const PORT = process.env.PORT || 3000;

const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const apiRoutes = require('./app/routing/apiRoutes.js');
const htmlRoutes = require('./app/routing/htmlRoutes.js');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'app/views/layouts'),
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'app/views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

apiRoutes(app);
htmlRoutes(app, path);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
