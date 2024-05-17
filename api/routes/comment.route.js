import express from 'express';
import { verifyToken } from '../utils/verfiyUser.js';
import { createComment, getPostComment } from '../controllers/comment.controller.js';


const router = express.Router();

router.post('/create', verifyToken, createComment);
router.get('/getPostComments/:postId', getPostComment);

export default router;