import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { config } from './config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging in development
if (config.isDev) {
  app.use((req, _res, next) => {
    console.log(`${new Date().toISOString()} ${req.method} ${req.path}`)
    next()
  })
}

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API routes will be added here
// app.use('/api/articles', articlesRouter)
// app.use('/api/categories', categoriesRouter)
// app.use('/api/search', searchRouter)
// app.use('/api/contact', contactRouter)

// Serve static files from dist directory in production
if (config.isProd) {
  const distPath = path.join(__dirname, '..', 'dist')
  app.use(express.static(distPath, {
    maxAge: '1y',
    immutable: true,
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache')
      }
    },
  }))

  // SPA catch-all - serve index.html for all non-API routes
  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'))
  })
}

// Error handling middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error:', err)
  res.status(500).json({
    error: {
      code: 'INTERNAL_ERROR',
      message: config.isDev ? err.message : 'Internal server error',
    },
  })
})

// Start server
app.listen(config.PORT, () => {
  console.log(`🚀 Server running on port ${config.PORT}`)
  console.log(`📍 Environment: ${config.NODE_ENV}`)
  console.log(`🔗 URL: ${config.SITE_URL}`)
})
