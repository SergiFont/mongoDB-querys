db.restaurantes.find()
db.restaurantes.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine:1})
db.restaurantes.find({}, {restaurant_id: 1, name: 1, borough:1, cuisine:1, _id: 0})
db.restaurantes.find({}, {restaurant_id: 1, name: 1, cuisine:1, _id: 0, 'address.zipcode': 1})
db.restaurantes.find({borough: 'Bronx'})
db.restaurantes.find({borough: 'Bronx'}).limit(5)
db.restaurantes.find({borough: 'Bronx'}).skip(5).limit(5)
db.restaurantes.find({'grades.score': {$gt: 90}})
db.restaurantes.find({$and:[{'grades.score': {$gt: 80}}, {'grades.score': {$lt: 100}}]}) // no funciona del todo
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
/*Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el 
segon element de l'array coord conté un valor entre 42 i 52. */
db.restaurantes.find({}, {restaurant_id: 1, name: 1, address: 1, })
db.restaurantes.find()
db.restaurantes.find()
db.restaurantes.find()
db.restaurantes.find()
db.restaurantes.find()
db.restaurantes.find()
db.restaurantes.find()

db.collection.find({
    $expr: {
      $eq: [
        "$timestampField",
        {
          $subtract: [
            new Date("2023-01-01T00:00:00Z"),
            new Date("1970-01-01T00:00:00Z")
          ]
        }
      ]
    }
  }) //TODO pasar a los apuntes; como extraer la Unix timestamp de una fecha en formato ISOdate y usarla como filtro


  db.collection.find({
    "arrayField.0": {
      $eq: "targetValue"
    }
  }) //TODO pasar a los apuntes; filtrar un valor en una posición específica de un array