import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

import sql from 'mssql';

sql.on("error", err => {
    console.log(err.message);
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/users', usersRoutes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

