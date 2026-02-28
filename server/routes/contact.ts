import { Router, Request, Response } from 'express';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ContactSubmission } from '../types.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONTACT_FILE = path.join(__dirname, '../../content/contact-submissions.json');

const router = Router();

// POST /api/contact - Submit contact form
router.post('/', async (req: Request, res: Response) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    const errors: { field: string; message: string }[] = [];

    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      errors.push({ field: 'name', message: 'Name is required' });
    } else if (name.trim().length < 2) {
      errors.push({ field: 'name', message: 'Name must be at least 2 characters' });
    }

    if (!email || typeof email !== 'string' || email.trim().length === 0) {
      errors.push({ field: 'email', message: 'Email is required' });
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
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      errors.push({ field: 'message', message: 'Message is required' });
    } else if (message.trim().length < 10) {
      errors.push({ field: 'message', message: 'Message must be at least 10 characters' });
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

    // Read existing submissions or create new array
    let submissions: ContactSubmission[] = [];
    try {
      const existing = await fs.readFile(CONTACT_FILE, 'utf-8');
      submissions = JSON.parse(existing);
    } catch {
      // File doesn't exist or is empty, start with empty array
    }

    // Add new submission
    submissions.push(submission);

    // Write back to file
    await fs.mkdir(path.dirname(CONTACT_FILE), { recursive: true });
    await fs.writeFile(CONTACT_FILE, JSON.stringify(submissions, null, 2));

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
