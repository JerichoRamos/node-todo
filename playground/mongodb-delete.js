const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017//TodoApp",{ useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    // console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // For TODOs

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Sana'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Sana'}).then((result) => {
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


    // For USERs

    // deleteMany
    // db.collection('Users').deleteMany({name: 'Dahyun'}).then((result) => {
    //     console.log(result);
    // });


    // deleteOne
    // db.collection('Users').findOneAndDelete({
    //     _id: new ObjectID(11)
    //     }).then((result) => {
    //     console.log(JSON.stringify(results, undefined, 2));
    // });


    
    // client.close();
});