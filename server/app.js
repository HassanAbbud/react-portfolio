const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: "Welcome to COMP229 Assignment 2 - Portfolio API" });
});

const contactRoutes = require('./routes/contact.routes');
const userRoutes = require('./routes/user.routes');

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

module.exports = app;