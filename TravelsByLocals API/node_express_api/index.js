import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

import sql from 'mssql';
import { getUsers, getUser, createUser, updateUser } from './controllers/users.js';

const config =
{
    user: 'kateDB',
    password: 'Lemarchand+',
    server: 'travelsbylocalsdbdeploy.database.windows.net',
    database: 'TravelsByLocalsAzureMVC',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    }
};

sql.on("error", err => {
    console.log(err.message);
})

getUsers();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello World! from Node.js'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

