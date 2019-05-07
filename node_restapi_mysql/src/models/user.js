import connection from '../database/connection';

let user_model = {};

user_model.getUsers = async function () {
    if (connection) {
        try {
            return await connection.query('SELECT * FROM node_restapi_mysql_users ORDER BY id DESC');
        } catch (error) {
            throw error;
        }
    }
}

user_model.insertUser = async function (new_user) {
    if (connection) {
        try {
            return await connection.query('INSERT INTO node_restapi_mysql_users SET ?', new_user);
        } catch (error) {
            console.log(error);
        }
    }
}

user_model.updateUser = async function (update_user) {
    if (connection) {
        try {
            const query = `
            UPDATE node_restapi_mysql_users SET 
            firstname = ${connection.escape(update_user.firstname)}, 
            username = ${connection.escape(update_user.username)}, 
            email = ${connection.escape(update_user.email)}, 
            password = ${connection.escape(update_user.password)} 
            WHERE id = ${connection.escape(update_user.id)}
            `;
            return await connection.query(query);
        } catch (error) {
            console.log(error);
        }
    }
}

user_model.deleteUser = async function (user_id) {
    if (connection) {
        try {
            return await connection.query(`DELETE FROM node_restapi_mysql_users WHERE id = ${connection.escape(user_id)}`);
        } catch (error) {
            console.log(error);
        }
    }
} 

export default user_model;