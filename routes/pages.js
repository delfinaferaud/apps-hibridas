import express from "express";
import { createHomePage } from "../views/home.js";
import { getAllShows } from "../service/showService.js";
import { createShowsBySection } from "../views/sections.js";

const router = express.Router();

router.get("/", (req, res) => {
  const sections = ["drama", "comedia", "acción", "misterio", "crimen", "infantil", "animación", "documental"];

  res.send(createHomePage(sections));
});

router.get("/section/:name", async (req, res) => {
  const section = req.params.name;

  const shows = await getAllShows({ section });

  res.send(createShowsBySection(shows, section));
});

export default router;