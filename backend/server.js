require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER, // Your Gmail address
            pass: process.env.EMAIL_PASS, // App password
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER, // Your receiving email
        subject: `SC Backcountry message from ${name}`,
        text: `Name: ${name}\n\nEmail: ${email}\n\nMessage:\n\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ message: "Your message has been sent!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error sending message. Please try again." });
    }
});

const PORT = 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
