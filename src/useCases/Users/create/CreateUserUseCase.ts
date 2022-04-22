import { hash } from 'bcrypt'
import { v4 } from 'uuid'

import { ICreateUserDTO } from '../../../dtos/ICreateUserDTO'
import { IUsersRepository } from '../../../repositories/UsersRepositories/IUsersRepository'

export class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, rule, password }: ICreateUserDTO) {
    // verificar se usuário já existe

    const passwordHash = await hash(password, 8)
    const uuid = v4()

    const user = await this.usersRepository.create({
      uuid,
      name,
      password: passwordHash,
      email,
      rule,
    })

    return user
  }
}
