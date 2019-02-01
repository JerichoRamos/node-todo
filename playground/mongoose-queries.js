const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// input (TODOs)
// var idTodo = '5c53aeeaea6dc82a84a1ee8c1';

// input (USERs)
var idUser = '5c51063b389d9e26189f1d19';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };


// Find id - Method #1 (TODOs)
// Todo.find({ 
//     _id: idTodo
//   }).then((todos) => {
//     console.log('Todos', todos);
//   });


// Find id - Method #2 (TODOs)
//   Todo.findOne({
//     _id: idTodo
//   }).then((todo) => {
//     console.log('Todo', todo);
//   });


// Find id - Method #3 (TODOs)
// Todo.findById(idTodo).then((todo) => {
//     if(!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log('ERROR'));


User.findById(idUser).then((user) => {
    if (!user) {
      return console.log('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log('ERROR');
});
