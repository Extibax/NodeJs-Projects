import dotenv from 'dotenv';

dotenv.config();

const keys = {
    host:           'localhost',
    user:           'root',
    password:       process.env.DB_PASS,
    database:       'node_restapi_mysql'
}

export default keys;