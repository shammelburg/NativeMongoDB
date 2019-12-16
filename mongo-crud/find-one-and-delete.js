const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, filterQueryObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        return await collection.findOneAndDelete(filterQueryObject);
    } catch (err) {
        console.error('(error) find-one-and-delete.js', err);
    } finally {
        client.close();
    }
}