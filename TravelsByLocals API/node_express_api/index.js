import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

import sql from 'mssql';

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


async function getDBUsersAsyncFunction() {
    try {
        let pool = await sql.connect(config);
        let result1 = await pool.request().query('select * from Users');
        console.log("The fucking DB connected you fucker!!!")
        console.log(result1);
        sql.close;
    }
    catch (err) {
        console.log(err.message);
        sql.close;

    }
}

getDBUsersAsyncFunction();

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello World! from Node.js'))

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

