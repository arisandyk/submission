import bcrypt from "bcrypt";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { msisdn, password } = req.body;

  const user = await User.findOne({ where: { msisdn } });
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = jwt.sign({ userId: user.id, name: user.name, username: user.username }, "secret_key", { expiresIn: "1h" });

  res.json({ token });
};

export const register = async (req, res) => {
  const { msisdn, name, username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newId = `62` + msisdn;

    const user = await User.create({
      msisdn: newId,
      name: name,
      username: username,
      password: hashedPassword,
    });

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};

export const currentUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "No token is provided" });
  }

  try {
    const decoded = jwt.verify(token, "secret_key");

    return res.status(200).json({ data: decoded });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
