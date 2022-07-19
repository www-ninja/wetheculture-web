import createError from 'http-errors';
import { User } from '../models';
import path from 'path';
import { doesNotMatch } from 'assert';

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['avatar', 'email', 'first_name', 'last_name', 'password'],
        });

        if (!user) {
            throw createError(404, 'User not found');
        }

        return res.status(200).json({ user });
    } catch (error) {
        return next(error);
    }
}

export const uploadAvatar = async (req, res, next) => {
    const file_name = req.file.filename;
    try {
        const user = await User.findByPk(req.user.id);
        await user.update({
            avatar: file_name
        });
        return res.status(200).json({ message: 'Profile image successfully uploaded' });
    } catch (error) {
        return next(error);
    }
}

export const updateAvatar = async (req, res, next) => {
    const user = req.user;
    const { avatar } = req.body;
    try {
        await user.update({
            avatar: avatar
        })
        return res.status(200).json({ message: 'Profile image successfully updated' });
    } catch (error) {
        return next(error);
    }
}

export const updateSetting = async (req, res, next) => {
    const user = req.user;
    const { email_notification, mention, newsletter, extra_options } = req.body;
    try {
        const setting = await Setting.findOne({ where: { user_id: user.id } });
        if (setting) {
            setting.update({
                email_notification,
                mention,
                newsletter,
                extra_options
            })
            return res.status(200).json({ message: 'Updated setting info successfully', setting: setting });
        }

        const newSetting = await Setting.create({
            user_id: user.id,
            email_notification,
            mention,
            newsletter,
            extra_options
        })

        return res.status(200).json({ message: 'Created setting info successfully', setting: newSetting });


    } catch (error) {
        return next(error);
    }
}

export const getAvatar = async (req, res, next) => {
    const { file_name } = req.query;
    try {
        // return res.status(200).json({ message: path.resolve(`./uploads/${file_name}`) });
        res.sendFile(path.resolve(`./uploads/${file_name}`));
    } catch (error) {
        return next(error);
    }
}
