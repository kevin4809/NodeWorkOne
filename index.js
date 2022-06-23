const express = require('express');

//routers
const { usersRouter } = require('./routes/users.routes')

// Utils
const { db } = require('./utils/database.util')

// Init express app
const app = express();

app.use(express.json());

// Define endpoints
app.use('/', usersRouter)


db.authenticate()
    .then(() => console.log('Todo okey '))
    .catch(err => console.log(err))


db.sync({ force: true })
    .then(() => console.log('Base de datos creada'))
    .catch(err => console.log(err))






const PORT = 3002
app.listen(PORT)
console.log(`server running on port ${PORT}  `)