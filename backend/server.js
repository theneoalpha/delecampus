// server.js
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
const dotenv = require("dotenv");
dotenv.config({ path: './process.env' });
require("./db/conn.js");

app.use(express.json());

const thoughtRouter = require('./router/thoughtRoutes'); 
const registerRouter = require('./router/auth'); 
const loginRouter = require('./router/login'); 

app.use(require('./router/auth'));
app.use(thoughtRouter); 
app.use(registerRouter); 
app.use(loginRouter); 

const PORT = process.env.PORT || 8000;


    app.get('/', (req, res) => {
        res.send('API is running...');
    });


app.listen(PORT, () => {
    console.log(`Listening at port ${PORT}`);
});
