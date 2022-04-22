import { db } from '../../config/database'

export async function createUsersTable() {
  const query = `
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS "pgcrypto";
    
    CREATE TABLE IF NOT EXISTS users(
      uuid uuid DEFAULT uuid_generate_v4(),
      name VARCHAR NOT NULL,
      password VARCHAR,
      email VARCHAR,
      rule VARCHAR,
      created_at TIMESTAMP DEFAULT now(),
      PRIMARY KEY (uuid)
    );
  `

  db.query(query, (err, res) => {
    //console.log(err, res)
    // db.end()
  })
}

export const queryInsertUser =
  'INSERT INTO users(uuid, name, password, email, rule, created_at) VALUES($1, $2, $3, $4, $5, $6) RETURNING uuid, name, email, rule, created_at'
