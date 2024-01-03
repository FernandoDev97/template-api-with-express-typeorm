import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  NODE_PORT: z.coerce.number().default(3333),
  DB_PORT: z.coerce.number().default(5432),
  DB_HOST: z.string(),
  DB_USERNAME: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalide environment variables', _env.error.format())

  throw new Error('Invalide environment variables')
}

export const env = _env.data
