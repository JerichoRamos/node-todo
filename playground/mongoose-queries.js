const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c5290a411f77c1ef4dc632b1';

Todo.find({ 
    _id: id
  }).then((todos) => {
    console.log('Todos', todos);
  }).catch((e) => console.log('ERROR'));
  
  Todo.findOne({
    _id: id
  }).then((todo) => {
    console.log('Todo', todo);
  }).catch((e) => console.log('ERROR'));

Todo.findById().then((todo) => {
  if (!todo) {
    return console.log('Id not found');
  }
    console.log('Todo By Id', todo);
}).catch((e) => console.log('ERROR'));