import express from 'express';
import passport from 'passport';
import crypto from 'crypto';

import multer from 'multer';

import { getUser, createUser, updateUser, updateSetting, deleteUser, uploadAvatar, getAvatar } from '../controllers/user';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
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

const router = express.Router();

router.post('/upload-avatar', passport.authenticate('jwt', { session: false }), upload.single('file'), uploadAvatar);
router.get('/get-avatar', getAvatar);
router.get('/', passport.authenticate('jwt', { session: false }), getUser);

module.exports = router;
