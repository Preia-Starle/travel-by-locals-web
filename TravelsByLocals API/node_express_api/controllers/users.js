import { v4 as uuidv4 } from 'uuid';
import sql from 'mssql';

let users = [];

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

export const getUsers = async function (req, res) {
    try {
        let pool = await sql.connect(config);
        let result1 = await pool.request().query('select * from Users');
        console.log(result1);
        sql.close;
    }
    catch (err) {
        console.log(err.message);
        sql.close;

    }
}

export const createUser = async function (req, res) {
    try {
        sql.connect(config);
        let pool = await sql.connect(config);
        await pool.request().query("insert into Users (Username, MyCity, Interests, AboutMe) VALUES ('Peter','Aarhus', 'sports','I am quite tall')");
        console.log("User inserted");
        sql.close;

    }
    catch (err) {
        console.log(err.message);
        sql.close;
    }
    
}
    

export const getUser = async function (req, res) {
    try {
        let pool = await sql.connect(config);
        let result1 = await pool.request().query(`select * from Users where UserID = 1`);
        console.log(result1);
        sql.close;
    }
    catch (err) {
        console.log(err.message);
        sql.close;

    }
}

export const deleteUser = async function (req, res) {
    try {
        let pool = await sql.connect(config);
        let result1 = await pool.request().query(`delete * from Users where UserID = 1`);
        console.log(result1);
        sql.close;
    }
    catch (err) {
            console.log(err.message);
            sql.close;
        }
    };

export const updateUser = async function (req, res) {
    try {
        let pool = await sql.connect(config);
        await pool.request().query("UPDATE Users SET MyCity = 'Lund' WHERE MyCity = 'Aarhus'");
        sql.close;
    }
    catch (err) {
        console.log(err.message);
        sql.close;
    }
};