db.restaurantes.find()
db.restaurantes.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine:1})
db.restaurantes.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0})
db.restaurantes.find({}, {restaurant_id: 1, name: 1, cuisine:1, _id: 0, 'address.zipcode': 1})
db.restaurantes.find({borough: 'Bronx'})
db.restaurantes.find({borough: 'Bronx'}).limit(5)
db.restaurantes.find({borough: 'Bronx'}).skip(5).limit(5)
db.restaurantes.find({'grades.score': {$gt: 90}})
db.restaurantes.find({grades: {$elemMatch: {score: {$gt: 80, $lt: 100}}}})
db.restaurantes.find({'address.coord': {$lt: -95.754168}})
db.restaurantes.find({$and:[{'grades.score':{$gt:70}}, {'address.coord':{$lt:-65.754168}}, {'cuisine': {$ne: 'American '}}]})
db.restaurantes.find({'cuisine': {$ne: 'American '}, 'grades.score': {$gt:70}, 'address.coord':{$lt:-65.754168}})
db.restaurantes.find({'cuisine': {$ne: 'American '}, 'grades.grade': 'A', 'borough': {$ne: 'Brooklyn'}}).sort({cuisine: -1})
db.restaurantes.find({name: {$regex: '^Wil'}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1})
db.restaurantes.find({name: {$regex: 'ces$'}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1})
db.restaurantes.find({name: {$regex: 'Reg'}}, {restaurant_id: 1, name: 1, borough: 1, cuisine:1})
db.restaurantes.find({$or: [{$and:[{'borough': 'Bronx'}, {'cuisine': 'American '}]}, {$and:[{'borough': 'Bronx'}, {'cuisine': 'Chinese'}]}]})
db.restaurantes.find({borough: {$in: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurantes.find({borough: {$nin: ['Staten Island', 'Queens', 'Bronx', 'Brooklyn']}}, {restaurant_id: 1, name: 1, borough:1, cuisine:1})
db.restaurantes.find({'grades.score': {$lt: 10}}, {restaurant_id: 1, name: 1, borough:1, cuisine:1})
db.restaurantes.find({$or:[{cuisine: {$in: ['Seafood', 'American ', 'Chinese']}}, {name: {$regex: '^Wil'}}]}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurantes.find({$and:[{'grades.grade': 'A'}, {'grades.score': 11}, {$expr: {$eq: ['$grades.date', {$subtract: [ new Date('2014-08-11T00:00:00Z'), new Date('1970-01-01T00:00:00Z')]}]}}]}, {restaurant_id: 1, name: 1, grades: 1})
db.restaurantes.find({$and:[{'grades.1.grade': {$eq: 'A'}}, {'grades.1.score': 9}, {$expr: {$eq: ['$grades.1.date', {$subtract: [ new Date('2014-08-11T00:00:00Z'), new Date('1970-01-01T00:00:00Z')]}]}}]}, {restaurant_id: 1, name: 1, grades: 1})
db.restaurantes.find({'address' : {$elemMatch: {'coord.1': {$gt: 42, $lt: 52}}}}, {restaurant_id: 1, name: 1, address: 1})
db.restaurantes.find().sort({name: 1})
db.restaurantes.find().sort({name:-1})
db.restaurantes.find().sort({cuisine: 1, borough: -1})
db.restaurantes.find({'address.street': {$exists: true}})
db.restaurantes.find({'address.coord': {$type: 'double'}})
db.restaurantes.find({'grades.score': {$mod: [7, 0]}}, {restaurant_id: 1, name: 1, 'grades.grade': 1})
db.restaurantes.find({name: {$regex: 'mon'}}, {name: 1, borough: 1, 'address.coord': 1, cuisine: 1})
db.restaurantes.find({name: {$regex: '^Mad'}}, {name: 1, borough: 1, 'address.coord': 1, cuisine: 1})