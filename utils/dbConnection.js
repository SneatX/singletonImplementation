import { MongoClient } from 'mongodb';

export class DBConnection {
    static #db = null;

    static async getConnection() {
        if (!DBConnection.#db) {
            const url = 'mongodb://localhost:27017';
            const client = new MongoClient(url);
            try {
                await client.connect();
                DBConnection.#db = client.db('singleton');
            } catch (err) {
                console.error('Error de conexión a MongoDB:', err);
                throw new Error('No se pudo conectar a la base de datos');
            }
        }
        return DBConnection.#db;   
    }
}
