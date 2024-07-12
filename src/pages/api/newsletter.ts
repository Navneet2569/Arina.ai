import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400).json({ error: "Email is required." });
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
        subject: "Thanks for Subscribing!",
        html: `
          <p>Hi,</p>
          <p>Thank you for subscribing to our newsletter. Stay tuned for updates!</p>
          <p>Best regards,</p>
          <p>Your Company Name</p>
        `,
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Subscription email sent successfully" });
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
