import { db } from '../../config/database'
import { queryInsertClient } from '../../database/sql/client'
import { ICreateClientDTO } from '../../dtos/iCreateClientDTO'

import { now } from '../../utils/now'

import { IClientsRepository } from './IClientsRepository'

export class ClientsRepository implements IClientsRepository {
  async create({ name, phone, whats, address }: ICreateClientDTO) {
    const { rows } = await db.query(queryInsertClient, [
      name,
      phone,
      whats,
      address,
      now(),
    ])
    const [client] = rows

    return client
  }
}
