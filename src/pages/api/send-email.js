import nodemailer from "nodemailer";


export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, organization, hireMe, message } = req.body;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.RECIPIENT_EMAIL,
            subject: `New message from ${name}, organization: ${organization}, wants to hire? ${hireMe}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}