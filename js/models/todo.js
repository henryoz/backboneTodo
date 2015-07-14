// js/models/todo.js

var app = app || {};

// Todo Model
// ----------
// Our basic **Todo** model has `title` and `completed` attributes.


var createdDate = new Date();
var dd = createdDate.getDate();
var mm = createdDate.getMonth()+1;
var yy = createdDate.getFullYear().toString().substr(2,2);
if (dd<10){dd = '0' + dd;}
if (mm<10){mm = '0' + mm;}

app.Todo = Backbone.Model.extend({


  // Default attributes ensure that each todo created has `title` and `completed` keys.
  defaults: {
    title: '',
    created: dd + '/' + mm + '/' + yy,
    completed: false
  },

  // Toggle the `completed` state of this todo item.
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  }

});