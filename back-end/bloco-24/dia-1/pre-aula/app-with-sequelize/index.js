const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');

const UserRoute = require('./controllers/userController');

const app = express();

app.use(bodyParser.json(), cors());

app.use('/users', UserRoute);

const PORT = process.env.API_PORT || 3000;

app.listen(PORT, () => console.log(`App online listening at PORT ${PORT}`));