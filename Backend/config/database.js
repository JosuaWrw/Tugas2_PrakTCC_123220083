import { Sequelize } from "sequelize";

const db = new Sequelize('note_db','root','tccjw',{
    host: '104.197.118.14',
    dialect: 'mysql'
});

export default db;