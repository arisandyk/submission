import express from "express";
import cors from "cors";
import { getAllLogistics, createLogistic, findLogisticData } from "./controllers/logistic.controller.js";
import { sequelize } from "./config/db.config.js";

const app = express();
const PORT = 5002;

app.use(express.json());
app.use(cors());

app.post("/logistic", createLogistic);
app.post("/logistic/find", findLogisticData);
app.get("/logistic/all", getAllLogistics);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
