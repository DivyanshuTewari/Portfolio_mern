import express from 'express';
import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

const router = express.Router();

// @desc    Create a new contact submission and send email
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Simple validation
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Please provide name, email and message.' });
    }

    // Return instant success response to the client so Vercel frontend never times out
    res.status(201).json({
      success: true,
      message: 'Message received successfully!'
    });

    // Process DB save and email delivery asynchronously in the background
    (async () => {
      let dbSavedStatus = false;
      let emailSentStatus = false;

      // 1. Try to save to MongoDB (only if connected)
      if (mongoose.connection.readyState === 1) {
        try {
          const newContact = new Contact({ name, email, message });
          await newContact.save();
          console.log(`[SUCCESS] Saved contact message from ${name} (${email}) to MongoDB.`);
          dbSavedStatus = true;
        } catch (dbError) {
          console.error('[WARN] MongoDB save failed in background:', dbError.message);
        }
      } else {
        console.log(`[INFO] MongoDB connection readyState is ${mongoose.connection.readyState}. Skipped DB save.`);
      }

      // 2. Try to send email via Nodemailer with 3s timeout limits
      const emailUser = process.env.EMAIL_USER;
      const emailPass = process.env.EMAIL_PASS;
      const receiverEmail = process.env.RECEIVER_EMAIL || 'divyanshutiwari500@gmail.com';

      if (emailUser && emailPass) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: emailUser,
              pass: emailPass
            },
            connectionTimeout: 3000,
            greetingTimeout: 3000,
            socketTimeout: 3000
          });

          const mailOptions = {
            from: `"Portfolio Contact System" <${emailUser}>`,
            to: receiverEmail,
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your portfolio contact form.\n\n` +
                  `Name: ${name}\n` +
                  `Email: ${email}\n\n` +
                  `Message:\n${message}`,
            html: `
              <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #d4af37; padding: 20px; border-radius: 8px; background-color: #0b0b0c; color: #ffffff;">
                <h2 style="color: #d4af37; border-bottom: 2px solid #d4af37; padding-bottom: 10px; margin-top: 0;">New Portfolio Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #d4af37;">${email}</a></p>
                <div style="background: #121214; padding: 15px; border-left: 4px solid #d4af37; margin: 20px 0; border-radius: 4px;">
                  <p style="margin: 0; font-style: italic; color: #e0e0e0;">"${message}"</p>
                </div>
                <p style="font-size: 0.8em; color: #888; text-align: center; margin-top: 30px; border-top: 1px solid #222; padding-top: 10px;">
                  Sent via MERN Portfolio System
                </p>
              </div>
            `
          };

          await transporter.sendMail(mailOptions);
          console.log(`[SUCCESS] Notification email successfully sent to ${receiverEmail}`);
          emailSentStatus = true;
        } catch (mailError) {
          console.error('[WARN] Nodemailer failed to send email:', mailError.message);
        }
      } else {
        console.warn('Email notification skipped because EMAIL_USER or EMAIL_PASS is missing in environment variables.');
      }

      console.log(`[CONTACT RECORD PROCESSED] Name: ${name} | Email: ${email} | DB: ${dbSavedStatus} | EmailSent: ${emailSentStatus}`);
    })();

  } catch (error) {
    console.error('Error in contact form handler:', error);
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
    }
  }
});

export default router;
