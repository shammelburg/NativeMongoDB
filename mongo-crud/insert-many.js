const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, dataArray, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        
        return await db.collection(collectionName).insertMany(dataArray);
    } catch (err) {
        console.error('(error) insert-many.js', err);
    } finally {
        client.close();
    }
}