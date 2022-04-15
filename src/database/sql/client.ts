import { db } from '../../config/database'

export async function createClientTable() {
  const query = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
    CREATE TABLE IF NOT EXISTS clients(
      uuid uuid DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      phone VARCHAR,
      whats VARCHAR,
      address VARCHAR,
      created_at TIMESTAMP DEFAULT now(),
      PRIMARY KEY (uuid)
    );
  `

  db.query(query, (err, res) => {
    console.log(err, res)
    db.end()
  })
}

export const queryInsertClient =
  'INSERT INTO clients(name, phone, whats, address, created_at) VALUES($1, $2, $3, $4, $5)'
