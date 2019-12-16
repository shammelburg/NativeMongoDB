// https://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/crud/

const find = require('./mongo-crud/find-many');
const insertMany = require('./mongo-crud/insert-many');
const insertOne = require('./mongo-crud/insert-one');

(async () => {



    
    let records = await find('inserts', {})
    console.log(records)
})();