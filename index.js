// https://mongodb.github.io/node-mongodb-native/3.0/reference/ecmascriptnext/crud/
// https://docs.mongodb.com/v3.2/crud/

const { find, insertOne, insertMany, deleteMany, deleteOne, updateOne } = require('./mongo-crud');

(async () => {
    let documents = [{ a: 1 }, { a: 2 }, { a: 2 }]

    // let inserted = await insertMany('test', documents)
    // console.log(inserted)

    // let deleted = await deleteMany('test', {})
    // console.log(deleted)

    let update = { firstName: 'Mike' }

    let updated = await updateOne('test', { _id: '5df7989358a1e63d50efa45b' }, { $set: update, $currentDate: { lastModified: true } }, true)
    console.log(updated)

    let records = await find('test', {})
    console.log(records)
})();