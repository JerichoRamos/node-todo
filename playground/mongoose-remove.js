const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.deleteMany({}).then((results) => {
//     console.log(results); 
// });

Todo.findByIdAndDelete('5c5a36ea5df2e16de6cb2a43').then((todo) => {
    console.log(todo);
});