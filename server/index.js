import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173'],
  credentials: true,
}));
app.use(express.json());

const contactSchema = z.object({
  name: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(5),
  service: z.string().trim().min(2),
  message: z.string().trim().min(10),
});

app.get('/health', (_req, res) => {
  res.json({ ok: true, message: 'PakSoils contact API is running.' });
});

app.post('/api/contact', async (req, res) => {
  try {
    const parsed = contactSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ ok: false, message: 'Invalid form data.', errors: parsed.error.flatten().fieldErrors });
    }

    const { name, email, phone, service, message } = parsed.data;
    const toEmail = process.env.CONTACT_TO_EMAIL || 'info@paksoils.com';

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return res.status(503).json({ ok: false, message: 'Email service is not configured yet.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: toEmail,
      subject: `New contact request from ${name}`,
      html: `
        <h3>New contact request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ ok: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: 'Failed to send message.' });
  }
});

app.use((_req, res) => {
  res.status(404).json({ ok: false, message: 'Not found.' });
});

app.listen(port, () => {
  console.log(`PakSoils API running on port ${port}`);
});
