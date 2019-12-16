const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, filterQueryObject, replacementObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        return await collection.findOneAndUpdate(filterQueryObject, replacementObject);
    } catch (err) {
        console.error('(error) find-one-and-replace.js', err);
    } finally {
        client.close();
    }
}