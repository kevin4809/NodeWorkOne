const { Sequelize } = require('sequelize')

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'k43344687',
    port: 5432,
    database: 'date-users',
    logging: false,
})

module.exports = { db }