import express from 'express';
import { authenticate } from '../middlewares/auth';

import { login } from '../controllers/auth';

const router = express.Router();
router.post('/login', authenticate('login'), login);

module.exports = router;