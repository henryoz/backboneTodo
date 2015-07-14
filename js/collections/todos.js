var app = app || {};

// ToDo collection
//
// The collection of todos is backed buy *localstorage* instead of a remote server

var ToDoList = Backbone.Collection.extend({

//  Reference to this collection's model.
  model: app.Todo,

//  Save all todo items under the "todos-backbone" namespace
  localStorage: new Backbone.LocalStorage('todos-backbone'),

//  Filter down the list of all todo items that are finished
  completed: function() {
    return this.filter(function( todo ) {
      return todo.get('completed');
    });
  },

//  Filter down the list to only items which have not been completed
  remaining: function() {
    return this.without.apply( this, this.completed() );
  },

//  Items are kept in sequential order. This generates the next order number (or 1 if no others are present)
  nextOrder: function() {
    if (!this.length) {
      return 1;
    }
    return this.last().get('order') + 1;
  },

//  Items are sorted by the order in which they are added
  comparator: function(todo) {
    return todo.get('order');
  }
});

// Create the global collection of todos
app.Todos = new ToDoList();