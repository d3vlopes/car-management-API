import { ICreateUserDTO } from '../../dtos/ICreateUserDTO'
import { User } from '../../model/User'

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<User>
}
