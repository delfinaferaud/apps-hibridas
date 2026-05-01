import express from 'express';
const router = express.Router();

import {
  getShows,
  getShowById,
  createShow,
  updateShow,
  deleteShow,
} from '../controllers/showsController.js';

import {
  validateCreateShow,
  validateUpdateShow,
} from '../middlewares/validateShow.js';

router.get('/shows', getShows);
router.get('/shows/:id', getShowById);
router.post('/shows', validateCreateShow, createShow);
router.put('/shows/:id', validateUpdateShow, updateShow);
router.delete('/shows/:id', deleteShow);

export default router;
