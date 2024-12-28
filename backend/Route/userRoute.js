import express from 'express';
import Form from '../models/userModel.js';
import nodemailer from 'nodemailer';

const router = express.Router();

router.post('/submit', async (req, res) => {
    try {
        // Save to database
        const formData = new Form(req.body);
        await formData.save();

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL, // Your email
                pass: process.env.EMAIL_PASSWORD, // Your email password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: 'bgstyle620@gmail.com',
            subject: req.body.subject,
            text: `
                Name: ${req.body.fullName}
                Email: ${req.body.email}
                Mobile: ${req.body.mobileNumber}
                Message: ${req.body.message}
            `,
        };

        await transporter.sendMail(mailOptions);

        res.status(201).send('Form submitted and email sent successfully!');
    } catch (error) {
        res.status(400).send('Error: ' + error.message);
    }
});

export default router;
