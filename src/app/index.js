var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var Router = require('./router.js');
var TaskCollection = require('./collections/TaskCollection.js');
var TaskModel = require('./models/TaskModel.js');

$(document).ready(function() {

  window.tasks = new TaskCollection();
  window.tasks.add(new TaskModel({title:'Title Task 1', content:'Content Task'}));
  window.tasks.add(new TaskModel({title:'Title Task 2', content:'Content Task'}));
  window.tasks.add(new TaskModel({title:'Title Task 3', content:'Content Task'}));
  window.tasks.add(new TaskModel({title:'Title Task 5', content:'Content Task'}));
  window.tasks.add(new TaskModel({title:'Title Task 4', content:'Content Task'}));
  window.tasks.add(new TaskModel({title:'Title Task 6', content:'Content Task'}));

  new Router();

});
