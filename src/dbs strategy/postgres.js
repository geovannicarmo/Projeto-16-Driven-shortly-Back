import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config()

const {Pool} = pg;

const user = process.env.DBUSER;
const password = process.env.DBPASSWORD;
const DBHOST = process.env.DBHOST;
const port =  process.env.DPPORT;
const database = process.env.DATABASE;

const connection = new Pool({
    user,
    password,
    DBHOST,
    port,
    database
  })

export default connection