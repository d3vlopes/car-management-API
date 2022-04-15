import { ICreateClientDTO } from '../../dtos/iCreateClientDTO'
import { Client } from '../../model/Client'

export interface IClientsRepository {
  create(data: ICreateClientDTO): Promise<Client>
}
