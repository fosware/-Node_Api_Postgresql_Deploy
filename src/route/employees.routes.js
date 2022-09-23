import {Router} from 'express'
import { getEmployees, getEmployee, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees',       getEmployees   )
router.get('/employee/:id',    getEmployee    )
router.post('/employees',      createEmployee )
router.patch('/employee/:id',   updateEmployee )
router.delete('/employee/:id', deleteEmployee )



export default router