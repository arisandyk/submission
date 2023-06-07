import { Logistic } from "../models/logistic.model.js";

export const getAllLogistics = async (req, res) => {
  try {
    const logistics = await Logistic.findAll();
    res.status(200).json(logistics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving logistics data" });
  }
};

export const findLogisticData = async (req, res) => {
  try {
    const { destination_name, origin_name } = req.body;

    const logisticData = await Logistic.findOne({
      where: { destination_name, origin_name },
    });

    if (!logisticData) {
      return res.status(404).json({ message: "Logistic data not found" });
    }

    return res.json(logisticData);
  } catch (error) {
    console.error("Error finding logistic data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createLogistic = async (req, res) => {
  const { logistic_name, amount, destination_name, origin_name, duration } = req.body;

  try {
    const newLogistic = await Logistic.create({
      logistic_name: logistic_name,
      amount: amount,
      destination_name: destination_name,
      origin_name: origin_name,
      duration: duration,
    });

    res.status(201).json(newLogistic);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating logistic" });
  }
};
