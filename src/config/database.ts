import { Sequelize } from "sequelize";

export const database = new Sequelize({
    username: "root",
    password: "mysql123",
    database: "CheveApp",
    host: "127.0.0.1",
    dialect: "mysql"
});