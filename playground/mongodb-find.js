// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017//TodoApp",{ useNewUrlParser: true }, (err, client) => {
const db = client.db('TodoApp');
 
    // FIND DOCS. IN MONGODB
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // Find '5c4fa4be79e98027e03388ad' in Robomongo (Todos)
    // db.collection('Todos').find({
    //     _id: new ObjectID('5c4fa4be79e98027e03388ad')
    //     }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // Find the doc that name Arsha in Robomongo (Users)
    // db.collection('Users').find({name: 'Arsha'}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // COUNT EVERY DOCS. IN MONGODB
    // if (err) {
    //     return console.log('Unable to connect to MongoDB server');
    // }
    // console.log('Connected to MongoDB server');

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });





// client.close();  
});
