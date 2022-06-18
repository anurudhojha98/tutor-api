const express = require('express');
const app = express();
const mongoose = require('mongoose');

var bodyParser = require('body-parser');

var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json')

const router = express.Router();
const cors = require('cors');



var corsOptions = {
    // we can add only allowed origins
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// we can add these details on configs
mongoose.connect('mongodb://10.25.61.243:27017/tutor_bin', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Database connected successfully!')
});

/* All routes will be added there */

require('./routes/authRoutes')(router);
require('./routes/userRoutes')(router);
require('./routes/todoRoutes')(router);
app.use('/api', router)

var options = {
    customCss: '.swagger-ui .topbar { display: none }'
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.listen(process.env.PORT || 3200, () => {
    console.log("Server started!")
});