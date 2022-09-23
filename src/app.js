import express from 'express'
import employeesRoutes from './route/employees.routes.js'
import indexRoutes from './route/index.routes.js'


const app = express()

app.use(express.json())
app.use(indexRoutes)
app.use('/api', employeesRoutes)

app.use((req, res, next) => {
    res.status(400).json({
        message: 'endpoint not found'
    })
} )

export default app;