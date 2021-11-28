require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes
const userRoutes = require('./src/routes/user');

app.use('/api/user', userRoutes);

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
