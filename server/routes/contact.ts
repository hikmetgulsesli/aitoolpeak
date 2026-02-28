import { Router, Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from 'express-rate-limit';
import type { ContactSubmission } from '../types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTACT_FILE = path.join(__dirname, '../../content/contact-submissions.jsonl');

const router = Router();

// Rate limiter: 5 submissions per hour per IP
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // 5 submissions per window
  message: {
    error: {
      code: 'RATE_LIMIT_EXCEEDED',
      message: 'Too many submissions from this IP, please try again later'
    }
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Apply rate limiter to the route
router.post('/', contactLimiter, async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation with max length constraints
    const MAX_NAME_LENGTH = 100;
    const MAX_EMAIL_LENGTH = 254;
    const MAX_SUBJECT_LENGTH = 200;
    const MAX_MESSAGE_LENGTH = 5000;

    const errors: { field: string; message: string }[] = [];

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push({ field: 'name', message: 'Name is required' });
    } else if (name.trim().length < 2) {
      errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
    } else if (name.trim().length > MAX_NAME_LENGTH) {
      errors.push({ field: 'name', message: `Name must not exceed ${MAX_NAME_LENGTH} characters` });
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      errors.push({ field: 'email', message: 'Email is required' });
    } else if (email.trim().length > MAX_EMAIL_LENGTH) {
      errors.push({ field: 'email', message: `Email must not exceed ${MAX_EMAIL_LENGTH} characters` });
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.push({ field: 'email', message: 'Invalid email format' });
      }
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length === 0) {
      errors.push({ field: 'subject', message: 'Subject is required' });
    } else if (subject.trim().length < 3) {
      errors.push({ field: 'subject', message: 'Subject must be at least 3 characters' });
    } else if (subject.trim().length > MAX_SUBJECT_LENGTH) {
      errors.push({ field: 'subject', message: `Subject must not exceed ${MAX_SUBJECT_LENGTH} characters` });
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      errors.push({ field: 'message', message: 'Message is required' });
    } else if (message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
    } else if (message.trim().length > MAX_MESSAGE_LENGTH) {
      errors.push({ field: 'message', message: `Message must not exceed ${MAX_MESSAGE_LENGTH} characters` });
    }

    if (errors.length > 0) {
      res.status(400).json({
        error: {
          code: 'VALIDATION_ERROR',
          message: 'Validation failed',
          details: errors
        }
      });
      return;
    }

    // Create submission
    const submission: ContactSubmission = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      submittedAt: new Date().toISOString()
    };

    // Append-only logging (newline-delimited JSON) to prevent race conditions
    await fs.mkdir(path.dirname(CONTACT_FILE), { recursive: true });
    await fs.appendFile(CONTACT_FILE, JSON.stringify(submission) + '\n');

    res.status(201).json({
      data: {
        id: submission.id,
        message: 'Contact form submitted successfully'
      }
    });
  } catch (error) {
    console.error('Error saving contact submission:', error);
    res.status(500).json({
      error: {
        code: 'INTERNAL_ERROR',
        message: 'Failed to save contact submission'
      }
    });
  }
});

export { router as contactRouter };
