import createError from 'http-errors';
import { Contact } from '../models';
const nodemailer = require('nodemailer');
// create transporter object with smtp server details
const transporter = nodemailer.createTransport({
    host: 'mail.natac.net',
    port: 465,
    auth: {
        user: 'noreply@natac.net',
        pass: 'Eew%ai4reid%'
    }
});



export const getContacts = async (req, res, next) => {
    try {
        const contacts = await Contact.findAll();
        return res.status(200).json({ contacts });
    } catch (error) {
        return next(error);
    }
}

export const createContact = async (req, res, next) => {
    const { company_name, first_name, last_name, email, phone_number, description } = req.body;
    try {

        // const contact = await Contact.findOne({
        //     where: {
        //         email: email
        //     }
        // });

        // if(contact) {
        //     return next(createError(400, 'Email is already existing'));
        // }
        // await transporter.sendMail({
        transporter.sendMail({
            from: 'noreply@natac.net',
            to: 'contact@wetheculture.io',
            subject: `WTC WEB CONTACT From: ` + first_name + ' '+ last_name + ' '+ company_name + ' ',
            text: 'email: '+ email + '\nphone: '+ phone_number + '\nMessage: ' + description
        });

        const newContact = await Contact.create({
            company_name,
            first_name,
            last_name,
            email,
            phone_number,
            description
        });
        return res.status(200).json({ message: 'successfully submitted!', data: newContact });
    } catch (error) {
        return next(error);
    }
}
