// // It comes at a cost as the operation takes a write lock for the duration of the operation as it needs to ensure the modification is atomic.
// // Modify and return the modified document
// r = await col.findOneAndUpdate({ a: 1 }, { $set: { b: 1 } }, {
//     returnOriginal: false,
//     sort: [['a', 1]],
//     upsert: true
// });