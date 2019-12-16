const mongoClient = require('./database');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, queryObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        return await collection.find(queryObject).toArray();
    } catch (err) {
        console.error('(error) find-many.js', err);
    } finally {
        client.close();
    }
}