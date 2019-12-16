const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, filterQueryObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteOne(filterQueryObject);

        return result.deletedCount;
    } catch (err) {
        console.error('(error) delete-one.js', err);
    } finally {
        client.close();
    }
}