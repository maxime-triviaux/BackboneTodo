var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var Router = require('./router.js');
var TaskCollection = require('./collections/TaskCollection.js');
var TaskModel = require('./models/TaskModel.js');
require('hammerjs');
require('materialize-css');


$(document).ready(function() {



  window.tasks = new TaskCollection();
  window.tasks.add(new TaskModel({id: 1, title:'Title Task 1', content:'Content Task'}));
  window.tasks.add(new TaskModel({id: 2, title:'Title Task 2', content:'Content Task'}));
  window.tasks.add(new TaskModel({id: 3, title:'Title Task 3', content:'Content Task'}));
  window.tasks.add(new TaskModel({id: 4, title:'Title Task 4', content:'Content Task'}));
  window.tasks.add(new TaskModel({id: 5, title:'Title Task 5', content:'Content Task'}));
  window.tasks.add(new TaskModel({id: 6, title:'Title Task 6', content:'Content Task'}));

  new Router();

});
