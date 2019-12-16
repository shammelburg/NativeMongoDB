const mongoClient = require('./client');
const { database } = require('../settings/mongodb-access')

module.exports = async (collectionName, arrayOfQueryObject, databaseName = database) => {
    let client = await mongoClient(databaseName);
    try {
        const db = client.db(databaseName);
        const collection = db.collection(collectionName);

        return await collection.bulkWrite(arrayOfQueryObject, { ordered: true, w: 1 });
    } catch (err) {
        console.error('(error) bulk-write.js', err);
    } finally {
        client.close();
    }
}