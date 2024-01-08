const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://paroimethu:HevBveW8VixlXK4q@todo-app-cluster.mkti3jz.mongodb.net/");

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo: todo
}