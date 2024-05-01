import express from 'express';
import { signup, sigin } from '../controllers/auth.controller.js';
const router = express.Router();


router.post('/signup', signup);
router.post('/signin', sigin);

export default router;