// This is all MONGO syntax

// use auroSell

// showCollection

// db.items.insertOne({name:"Pixel 7", price: 999, rating: 4, availability: "yes"})

// db.items.insertMany([{name:"Pixel 7", price: 999, rating: 4, availability: "yes"},{name:"Pixel 7 Pro", price: 1299, rating: 4.5, availability: "yes"},{name:"Pixel 6a", price: 749, rating: 4, availability: "no"}])

// db.table.find()

// db.items.find({$or: [{rating: {$lt: 4}},{price:{$gt:1000}}]})

// db.items.find({rating: {$gt: 4}},{price: 1, rating: 1})

// db.items.updateOne({name: "Pixel 6a"},{$set:{price: 680}})

// db.items.deleteOne({name: "Pixel 7"})

// db.items.updateOne({name: "Pixel 6a"},{$set:{price: 680, availability: "yes"}})