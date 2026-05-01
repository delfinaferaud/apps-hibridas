import { getDB } from "../db.js";

export const getHome = (req, res) => {
  const sections = ["drama", "comedia", "acción", "misterio", "crimen", "infantil", "animación", "documental"];
  res.render("index", { sections });
};

export const getSection = async (req, res) => {
  const db = getDB();
  const section = req.params.name;

  const shows = await db
      .collection("shows")
      .find({section})
      .toArray();

  res.render("section", { shows, section });
};