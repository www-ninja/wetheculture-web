import express from 'express';
import passport from 'passport';

import { createContact, getContacts } from '../controllers/contact';
import { validate } from '../middlewares/validation';

const router = express.Router();

router.post('/',validate('create-contact'), createContact);
router.get('/', passport.authenticate('jwt', { session: false }), getContacts);

module.exports = router;
