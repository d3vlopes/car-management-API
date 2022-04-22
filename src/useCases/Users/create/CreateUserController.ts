import { Request, Response } from 'express'

import { UsersRepository } from '../../../repositories/UsersRepositories/UsersRepository'
import { CreateUserUseCase } from './CreateUserUseCase'

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, rule, password } = req.body

    const usersRepository = new UsersRepository()
    const createUserUseCase = new CreateUserUseCase(usersRepository)

    const user = await createUserUseCase.execute({
      name,
      email,
      password,
      rule,
    })

    return res.status(200).json(user)
  }
}
