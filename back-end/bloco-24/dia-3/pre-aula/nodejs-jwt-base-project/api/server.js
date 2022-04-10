const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const { authToken, validateBody } = require('../middlewares');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();

apiRoutes.post('/api/login', validateBody, routes.login);
apiRoutes.post('/api/users', validateBody, routes.createUsers);
apiRoutes.get('/api/posts', authToken, routes.getPosts);
apiRoutes.get('/api/users', authToken, routes.getUsers);

app.use(apiRoutes);

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));
