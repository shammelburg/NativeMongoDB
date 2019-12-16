const mongoClient = require('./database');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, dataArray, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const result = await db.collection(collectionName).insertMany(dataArray);
        return result.insertedCount;
    } catch (err) {
        console.error('(error) insert-many.js', err);
    } finally {
        client.close();
    }
}