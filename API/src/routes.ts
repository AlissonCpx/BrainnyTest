import { Router, Request, Response } from 'express'
//import { getTasks, saveTask, getTask, updateTask, finnishedTask, removedTask } from './controller/TaskController'
import { getUser, getUsers, saveUser, updateUser } from './controller/UserController'
import { getRegistered_time, getRegistered_times, saveRegistered_time, updateRegistered_time } from './controller/RegisteredController'
import { authenticate } from './controller/AuthController'
import authMiddleWare, { } from './middleware/Login'

const routes = Router();

routes.post('/login', authenticate)

routes.get('/user', authMiddleWare, getUsers)
routes.post('/user', authMiddleWare, saveUser)
routes.get('/user/:id', authMiddleWare, getUser)
routes.put('/user/:id', authMiddleWare, updateUser)

routes.get('/registered', authMiddleWare, getRegistered_times)
routes.post('/registered', authMiddleWare, saveRegistered_time)
routes.get('/registered/:id', authMiddleWare, getRegistered_time)
routes.put('/registered/:id', authMiddleWare, updateRegistered_time)

export default routes