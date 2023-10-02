import { Sequelize } from "sequelize";

// Membuat koneksi database Sequelize
const db = new Sequelize('services', 'root', '', {
    host: 'localhost', // Host database
    dialect: 'mysql' // Jenis database yang digunakan (dalam hal ini MySQL)
});

export default db;
