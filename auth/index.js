import express from "express";
import cors from "cors";
import { login, register, currentUser } from "./controllers/user.controller.js";
import { sequelize } from "./config/db.config.js";

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

app.post("/auth/login", login);
app.post("/auth/register", register);
app.get("/auth/me", currentUser);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
