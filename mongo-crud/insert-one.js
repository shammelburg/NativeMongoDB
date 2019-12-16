const mongoClient = require('./database');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, dataObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const result = await db.collection(collectionName).insertOne(dataObject);
        return result.insertedCount;
    } catch (err) {
        console.error('(error) insert-one.js', err);
    } finally {
        client.close();
    }
}
