import { db } from '../../config/database'
import { queryInsertUser } from '../../database/sql/users'

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { IUsersRepository } from './IUsersRepository'

import { now } from '../../utils/now'

export class UsersRepository implements IUsersRepository {
  async create({ uuid, name, email, password, rule }: ICreateUserDTO) {
    const { rows } = await db.query(queryInsertUser, [
      uuid,
      name,
      password,
      email,
      rule,
      now(),
    ])

    const [user] = rows

    return user
  }
}
