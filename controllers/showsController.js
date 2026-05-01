import {
  getAllShows,
  getShowByIdService,
  createShowService,
  updateShowService,
  deleteShowService
} from "../service/showService.js";

export const getShows = async (req, res) => {
  try {
    const filters = {};

    if (req.query.section) filters.section = req.query.section;
    if (req.query.genre) filters.genre = req.query.genre;

    const shows = await getAllShows(filters);

    res.json(shows);

  } catch (error) {
    res.status(500).json({ error: "Error al obtener shows" });
  }
};

export const getShowById = async (req, res) => {
  try {
    const show = await getShowByIdService(req.params.id);

    if (!show) {
      return res.status(404).json({ error: "No encontrado" });
    }

    res.json(show);

  } catch (error) {
    res.status(400).json({ error: "ID inválido" });
  }
};

export const createShow = async (req, res) => {
  try {
    const newShow = await createShowService(req.body);

    res.status(201).json(newShow);

  } catch (error) {
    if (error.message === "DUPLICATE") {
      return res.status(400).json({
        error: "La serie ya se encuentra en la base de datos"
      });
    }

    res.status(500).json({ error: "Error al crear show" });
  }
};

export const updateShow = async (req, res) => {
  try {
    const updated = await updateShowService(
      req.params.id,
      req.body
    );

    if (!updated) {
      return res.status(404).json({ error: "No encontrado" });
    }

    res.json(updated);

  } catch (error) {
    if (error.message === "DUPLICATE") {
      return res.status(400).json({
        error: "Ya existe otra serie con ese nombre"
      });
    }

    res.status(500).json({ error: "Error al actualizar" });
  }
};

export const deleteShow = async (req, res) => {
  try {
    const deleted = await deleteShowService(req.params.id);

    if (!deleted) {
      return res.status(404).json({ error: "No encontrado" });
    }

    res.json({ message: "Eliminado" });

  } catch (error) {
    res.status(500).json({ error: "Error al eliminar" });
  }
};