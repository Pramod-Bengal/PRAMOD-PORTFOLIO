const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Transporter Configuration
// Note: For Gmail, you might need to use an App Password if 2FA is enabled.
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000,   // 10 seconds
    socketTimeout: 10000,     // 10 seconds
});

app.post('/send-email', (req, res) => {
    const { name, contact, subject, message } = req.body;

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || 'pramodbenagal@gmail.com',
        subject: `Portfolio Contact: ${subject}`,
        text: `
      You have received a new message from your portfolio website.

      Name: ${name}
      Contact Info: ${contact}
      
      Subject: ${subject}
      
      Message:
      ${message}
    `,
        replyTo: contact // Allows you to reply directly to the user's email/contact
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ success: false, error: error.message });
        }
        console.log('Email sent: ' + info.response);
        res.status(200).json({ success: true, message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
