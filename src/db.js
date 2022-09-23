import postgres from 'postgres'
import {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE} from './config.js'

export const pool = postgres ({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
})

