const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, filterQueryObject, updateQueryObject, upsert = false, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);

        return await db.collection(collectionName).updateMany(filterQueryObject, updateQueryObject, { upsert: upsert });
    } catch (err) {
        console.error('(error) update-many.js', err);
    } finally {
        client.close();
    }
}