import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

export const createUser = (req, res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

export const getUser = (req, res) => {
    conn.query('SELECT Username FROM Users', 
        function (err, results, fields) {
            if (err) throw err;
            else console.log('Selected ' + results.length + ' row(s).');
            for (i = 0; i < results.length; i++) {
                console.log('Row: ' + JSON.stringify(results[i]));
            }
            console.log('Done.');
        })
    conn.end(
        function (err) { 
            if (err) throw err;
            else  console.log('Closing connection.') 
    });
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id}deleted from database`)
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName} = req.body;

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);

}