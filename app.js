const { MongoClient } = require('mongodb')

const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
mongoClient.connect((err, client) => {
  if (err) throw err

  const db = client.db('usersdb')
  const collection = db.collection('users')


  /*
   * Добавление данных
   */

  // Добавление одного элемента
  // let user = { name: "Avi", age: 21 }
  // collection.insertOne(user, (err, result) => {
  //   if (err) console.error(err)
  //   console.log(result.ops)
  //   client.close()
  // })

  // Добавление нескольких элементов
  // let users = [
  //   { name: 'Bob', age: 14 },
  //   { name: 'Jhon', age: 25 },
  //   { name: 'Kelvin', age: 18 }
  // ]
  // collection.insertMany(users, (err, result) => {
  //   if (err) console.error(err)
  //   console.log(result.ops)
  //   client.close()
  // })


  /*
   * Получение данных
   */

  // Получение всех данных данных
  // collection.find().toArray((err, results) => {
  //   if (err) console.error(err)
  //   console.log(results)
  //   client.close()
  // })

  // Получение данных с фильтрацией
  // collection.find({name: 'Avi'}).toArray((err, results) => {
  //   if (err) console.error(err)
  //   console.log(results)
  //   client.close()
  // })

  // Получение первых найденых данных
  // collection.findOne((err, results) => {
  //   if (err) console.error(err)
  //   console.log(results)
  //   client.close()
  // })


  /*
   * Удаление данных
   */

  // Удаление нескольких данных
  // collection.deleteMany({ name: 'Tom' }, (err, result) => {
  //   if (err) console.error(err)
  //   console.log(result)
  //   client.close()
  // })

  // Удаление одного документа
  // collection.deleteOne({ name: 'Tom' }, (err, result) => {
  //   if (err) console.error(err)
  //   console.log(result)
  //   client.close()
  // })

  // Удаление и возвращение элемента
  // collection.findOneAndDelete({ age: 21 }, (err, result) => {
  //   if (err) console.error(err)
  //   console.log(result)
  //   client.close()
  // })

  // Удаление коллекции
  // collection.drop((err, result) => {
  //   if (err) console.error(err)
  //   console.log(result)
  //   client.close()
  // })


  /*
   * Обновление данных
   */

  // const users = [
  //   { name: "Bob", age: 34 },
  //   { name: "Alice", age: 21 },
  //   { name: "Tom", age: 45 }
  // ]
  // collection.insertMany(users, (err, results) => {

    // Обновление и возвращение элемента
    // collection.findOneAndUpdate(
    //   { age: 21 },              // критерий выборки
    //   { $set: {age: 25} },      // критерий обновления
    //   {                         // доп. опции обновления
    //     returnOriginal: false   // если true - вернется новое знач-е
    //   },
    //   (err, result) => {
    //     console.log(result)
    //     client.close()
    //   }
    // )

    // Обновление всех документов
    // collection.updateMany(
    //   { name: 'Sam' },
    //   { $set: {name: 'Nosam'} },
    //   (err, result) => {
    //     if (err) throw err
    //     console.log(result)
    //     client.close()
    //   }
    // )

    // Обновление одного документа
    // collection.updateOne(
    //   { name: 'Tom' },
    //   { $set: {name: 'Notom'} },
    //   (err, result) => {
    //     if (err) throw err
    //     console.log(result)
    //     client.close()
    //   }
    // )
  // })


})
