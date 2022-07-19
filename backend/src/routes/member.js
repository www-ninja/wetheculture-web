import express from 'express';
import passport from 'passport';
import multer from 'multer';

import crypto from 'crypto';

import { createMember, getMembers, getAvatar, deleteMember } from '../controllers/member';

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/members');
    },
    filename: function (req, file, cb) {
        if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/jpeg') {
            var err = new Error();
            err.code = 'filetype';
            return cb(err);
        } else {
            var fileName = crypto.randomBytes(10).toString('hex');;
            file.filename = fileName;
            cb(null, fileName + '.jpg');
        }
    }
});

let upload = multer({ storage: storage });

router.get('/image', getAvatar);
router.post('/', passport.authenticate('jwt', { session: false }), upload.single('file'), createMember);
router.get('/', getMembers);
router.delete('/', passport.authenticate('jwt', { session: false}), deleteMember );

module.exports = router;
