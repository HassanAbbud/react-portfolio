const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = require('./server/app');
const connectDB = require('./server/config/db.config');

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

connectDB();


server.use('/', app);


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
  console.log(`MongoDB Database name: Skeleton`);
  console.log(`Running on: http://localhost:${PORT}`);
});