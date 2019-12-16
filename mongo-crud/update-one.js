const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, filterQueryObject, updateQueryObject, upsert = false, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const result = await db.collection(collectionName).updateOne(filterQueryObject, updateQueryObject, { upsert: upsert });

        return result.modifiedCount;
    } catch (err) {
        console.error('(error) update-one.js', err);
    } finally {
        client.close();
    }
}
