/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    this.todos = this.todos.filter((_, _index) => _index !== index);
  }

  getAll() {
    return this.todos;
  }

  update(index, updatedTodo) {
    if (this.todos.length > index) {
      this.todos[index] = updatedTodo;
    }
  }

  get(index) {
    return this.todos.length > index ? this.todos[index] : null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
