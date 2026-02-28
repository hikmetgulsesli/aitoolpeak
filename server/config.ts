import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const config = {
  PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : 3525,
  SITE_URL: process.env.SITE_URL || 'http://localhost:3525',
  CONTENT_DIR: process.env.CONTENT_DIR || path.join(__dirname, '..', 'content', 'articles'),
  CONTACT_FILE: process.env.CONTACT_FILE || path.join(__dirname, '..', 'content', 'contact-submissions.json'),
  NODE_ENV: process.env.NODE_ENV || 'development',
  isDev: process.env.NODE_ENV !== 'production',
  isProd: process.env.NODE_ENV === 'production',
}
