import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// Mendefinisikan model "Service" dengan properti-properti yang sesuai
const { DataTypes } = Sequelize;
const Service = db.define('services', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    currency: DataTypes.STRING,
    price: DataTypes.INTEGER
}, {
    freezeTableName: true
});

// Menjalankan synchronisasi model dengan database (menggunakan Sequelize)
(async () => {
    await db.sync();
})();

export default Service;
