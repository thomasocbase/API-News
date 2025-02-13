import express from 'express';
import dotenv from 'dotenv';
import controller from './controller.js';

const router = express.Router();
dotenv.config();

router.get('/', controller.getAllNews);
router.get('/:sport', controller.getNewsBySport);

export default router;