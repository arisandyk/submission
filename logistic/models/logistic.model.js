import { DataTypes } from "sequelize";
import Sequelize from "sequelize";
import { sequelize } from "../config/db.config.js";

export const Logistic = sequelize.define("logistic", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true,
  },
  logistic_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  destination_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  origin_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
