import { Router } from 'express'

import { CreateUserController } from '../useCases/Users/create/CreateUserController'

const createUserController = new CreateUserController()

export const usersRoutes = Router()

usersRoutes.post('/', createUserController.handle)
