const nodemailer = require('nodemailer');
const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);
const path = require('path');

async function sendEmail(email, subject) {
    try {
        console.log("sendEmail - Function called...");

        // Read HTML template file
        const htmlTemplate = await readFile('./common/welcome_mail.html', 'utf8');
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            pool: true,
            service: "Gmail",
            port: 587,
            secure: true,
            auth: {
                user: 'sagarcloud11@gmail.com', // generated ethereal user
                pass: 'pshv jvim peak epdc', // generated ethereal password
            },
        });

        // Send email with HTML content
        await transporter.sendMail({
            from: "sagarcloud11@gmail.com",
            to: email,
            subject: subject,
            html: htmlTemplate, // HTML content from the template file
            // attachments: [{ path: path }], // Attachments if any
        });

        console.log("Email sent successfully");
        return true;
    } catch (error) {
        console.log("Email not sent");
        console.log(error);
        return false;
    }
}

module.exports = { sendEmail };
