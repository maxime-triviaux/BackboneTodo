//Router
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');

//VIEWS
var DefaultView = require('./views/DefaultView.js');
var NewTaskView = require('./views/NewTaskView.js');

module.exports = Backbone.Router.extend({

  routes: {
      "":"default",
      "home": "default",
      "newtask": "newtask"
  },

  initialize: function(){
    Backbone.history.start();
  },

  default: function(){
    var defaultView = new DefaultView();
    defaultView.render();
  },


  newtask: function(){
    var newTaskView = new NewTaskView();
    newTaskView.render();
  }


});
