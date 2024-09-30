import { DBConnection } from '../utils/dbConnection.js';

export class UserModel {
    static async getUser(username) {
        const dbConnection = await DBConnection.getConnection();
        const user = await dbConnection.collection('users').findOne({ username });
        return user;
    }
}
