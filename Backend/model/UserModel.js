import { Sequelize } from "sequelize";
import db from "../config/database.js";

const note = db.define('notes',{
    title: Sequelize.STRING,
    content: Sequelize.STRING
}, {
    freezeTableName: true,
    createdAt: 'tanggal_dibuat',
    updatedAt: 'tanggal_diubah'
});

export default note;

(async()=>{
    await db.sync();
})();