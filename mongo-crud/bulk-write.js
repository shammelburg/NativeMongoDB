// const r = await col.bulkWrite([
//     { insertOne: { document: { a: 1 } } },
//     { updateOne: { filter: { a: 2 }, update: { $set: { a: 2 } }, upsert: true } },
//     { updateMany: { filter: { a: 2 }, update: { $set: { a: 2 } }, upsert: true } },
//     { deleteOne: { filter: { c: 1 } } },
//     { deleteMany: { filter: { c: 1 } } },
//     { replaceOne: { filter: { c: 3 }, replacement: { c: 4 }, upsert: true } }
// ],
//     { ordered: true, w: 1 }
// );