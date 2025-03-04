const emailRouter = require('express').Router()
require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const sendEmail = async (request, response) => {
    try {
        const { to, subject, message } = request.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to,
            subject,
            text: message
        };

        await transporter.sendMail(mailOptions);
        response.status(200).json({ success: true, message: "Correo enviado exitosamente!" })
    } catch (error) {
        response.status(500).json({ success: false, message: "Error al enviar correo", error: error.message })
    }
}

emailRouter.post('/send-email', sendEmail)

module.exports = emailRouter