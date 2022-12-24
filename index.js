const express = require('express');
const app = express();


const users = [
    {
        id: "1",
        username: "kamola",
        password: "Kamola1122",
        isAdmin: true,
    }
    {
        id: "1",
        username: "jane",
        password: "Jane1122",
        isAdmin: false,
    }
]

app.listen(3000, ()=> console.log("backend server is running!"))