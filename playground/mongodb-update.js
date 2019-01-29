const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect("mongodb://localhost:27017//TodoApp",{ useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // Update doc content

    // TODOs
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c4fcfadb04c2689c319be86')
    //     }, {
    //         $set: {                     // set new data
    //             text: 'Dahyun'                            
    //         }
    //     }, {
    //         returnOriginal: 'Sana'      // original data
    //     }).then((result) => {
    //         console.log(result);
    //     });

    // USERs
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c4fa5b24de36e2d28f57cd8')
        }, {
            $set: {                     // set new data
                name: 'Dahyun'                            
            },
            $inc: {                     // increment age by 1
                age: 1
            }
        }, {
            returnOriginal: 'Ashe'      // original data 
        }).then((result) => {
            console.log(result);
        });


    // client.close();
});