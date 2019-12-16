const MongoClient = require('mongodb').MongoClient;
const { url, options, database } = require('../settings/mongodb-access');

module.exports = async (databaseName) => {
    let client = await MongoClient.connect(url, options);
    console.log(`Connected to: ${url}:${databaseName}`);
    return client;
}