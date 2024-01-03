import express from 'express'
import { AppDataSource } from './data-source'
import { env } from './env'
import routes from './routes'

AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())
  app.use(routes)

  return app.listen(
    {
      port: env.NODE_PORT,
      host: '0.0.0.0',
    },
    () => {
      console.log('HTTP server running!')
    },
  )
})
