const find = require('./find');
const insertOne = require('./insert-one');
const insertMany = require('./insert-many');
const updateOne = require('./update-one');
const updateMany = require('./update-many');
const deleteOne = require('./delete-one');
const deleteMany = require('./delete-many');
const bulkWrite = require('./bulk-write');
const findOneAndDelete = require('./find-one-and-delete');
const findOneAndReplace = require('./find-one-and-replace');
const findOneAndUpdate = require('./find-one-and-update');

module.exports = {
    find,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    deleteOne,
    deleteMany, 
    bulkWrite,
    findOneAndDelete,
    findOneAndReplace,
    findOneAndUpdate
}