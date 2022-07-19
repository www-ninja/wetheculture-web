import fs from 'fs';
import createError from 'http-errors';
import path from 'path';
import { Member } from '../models';

export const createMember = async (req, res, next) => {
    const { name, email, role, team } = req.body;
    const file_name = req.file.filename;
    try {
        const member = await Member.findOne({
            where: {
                email: email
            }
        });

        if (member) {
            throw createError(400, 'Email is already existing');
        }

        const newMember = await Member.create({
            name: name,
            email: email,
            role: role,
            team: team,
            avatar: file_name,
        });

        return res.status(200).json({ message: 'successfully added!', data: newMember });

    } catch (error) {
        return next(error)
    }
}

export const getAvatar = async (req, res, next) => {
    const { file_name } = req.query;
    try {
        // return res.status(200).json({ message: path.resolve(`./uploads/${file_name}`) });
        res.sendFile(path.resolve(`./uploads/members/${file_name}`));
    } catch (error) {
        console.log(error);
        return next(error);
    }
}

export const getMembers = async (req, res, next) => {
    try {
        const members = await Member.findAll({ order: [['createdAt', 'ASC']]});
        return res.status(200).json({ message: 'successfully added!', data: members });
    } catch (error) {
        return next(error)
    }
}


export const updateMember = async (req, res, next) => {
    try {
        
    } catch (error) {
        return next(error)
    }
}

export const deleteMember = async (req, res, next) => {
    try {
        let member = await Member.findOne({ where: { id: req.body.id }});
        await fs.unlinkSync(`./uploads/members/${member.avatar}`);
        await member.destroy();
        return res.status(200).json({ message: 'successfully deleted!'});
    } catch (error) {
        return next(error)
    }  
}

