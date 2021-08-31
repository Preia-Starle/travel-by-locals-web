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

let dbConnect = sql.connect(config, function(err) {
    if (err) throw err;
    console.log('connected')
  });
  
  

sql.on("error", err => {
    console.log(err.message);
});

export const getUsers = async function (req, res) {
    try {
        let result1 = await dbConnect.request().query('select * from Users');
        console.log(result1);
        res.send(result1);
        sql.close;
    }
    catch (err) {
        console.log(err.message);
        sql.close;

    }
}

export const createUser = async function (req, res) {
    try {
        let username = req.body.Username;
        let myCity = req.body.MyCity;
        let interests = req.body.Interests;
        let aboutMe = req.body.AboutMe;
        let result1 = await dbConnect.request().query("insert into Users (Username, MyCity, Interests, AboutMe) VALUES ('"+username+"', '"+myCity+"', '"+interests+"', '"+aboutMe+"')");
        res.send(result1);
        sql.close;
    }
    catch (err) {
        console.log(err.message);
        sql.close;
    }
    
}
    

export const getUser = async function (req, res, userId) {
    try {
        userId = req.params.id;
        let result1 = await dbConnect.request().query("select * from Users where UserID = ('"+userId+"')");
        console.log(result1);
        res.send(result1);
    }
    catch (err) {
        console.log(err.message);
        sql.close;

    }
}

export const deleteUser = async function (req, res, userId) {
    try {
        userId = req.params.id;
        let result1 = await dbConnect.request().query("delete * from Users where UserID = ('"+userId+"')");
        console.log(result1);
        res.send(result1);
    }
    catch (err) {
            console.log(err.message);
            sql.close;
        }
    };

export const updateUser = async function (req, res) {
    try {
        let result1 = await dbConnect.request().query("UPDATE Users SET MyCity = 'Lund' WHERE MyCity = 'Aarhus'");
        console.log(result1);
        res.send(result1);
    }
    catch (err) {
        console.log(err.message);
        sql.close;
    }
};
