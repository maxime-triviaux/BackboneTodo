//TodoView
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var template = require('../templates/home.hbs');



module.exports = Backbone.View.extend({

  el: $('#app'),

  events:{
    "click .checkbox-item": "checkToggle"
  },


  initialize: function() {
    this.tasks = window.tasks;
  },

  render: function() {
    var compiled = template({tasks: this.tasks.toJSON()});
    $(this.el).html(compiled);
    return this;
  },

  checkToggle: function(e) {
    var checkbox = $("#"+e.target.id);
    var taskId = checkbox.attr('num');
    var li = $("#li-task-"+taskId);
    li.slideUp();
    this.tasks.remove(taskId);
  }


});
