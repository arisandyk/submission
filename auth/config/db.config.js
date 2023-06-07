import { Sequelize } from "sequelize";

const sequelize = new Sequelize("testing_database", "postgres", "postgres", {
  host: "localhost",
  port: 5430,
  dialect: "postgres",
});

export { sequelize };
