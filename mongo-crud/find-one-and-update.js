const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

// // It comes at a cost as the operation takes a write lock for the duration of the operation as it needs to ensure the modification is atomic.
// // Modify and return the modified document

module.exports = async (collectionName, filterQueryObject, updateObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        const callbackResultObject = {
            returnOriginal: false,
            sort: [['a', 1]],
            upsert: true
        }

        return await collection.findOneAndUpdate(filterQueryObject, updateObject, callbackResultObject);
    } catch (err) {
        console.error('(error) find-one-and-update.js', err);
    } finally {
        client.close();
    }
}