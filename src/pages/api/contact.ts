import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        res.status(400).json({ error: "All fields are required." });
        return;
      }

      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        res.status(500).json({ error: "Email configuration is missing." });
        return;
      }

      const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `We have received your enquiry: ${subject}`,
        html: `
          <p>Hi ${name},</p>
          <p>Thank you for getting in touch with us. We have received your enquiry and will respond as soon as possible.</p>
          <p><strong>Your Query:</strong></p>
          <p>${message}</p>
          <p>Best regards,</p>
          <p>Arina.ai</p>
        `,
      };

      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent: ", info.messageId);

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ error: "Failed to send email", details: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
