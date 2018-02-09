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

  },

  render: function() {
    var compiled = template({tasks: window.tasks.toJSON()});
    $(this.el).html(compiled);
    return this;
  },

  checkToggle: function(e) {
    var checkbox = $("#"+e.target.id);
    var li = $("#li-task-"+checkbox.attr('num'));
    li.slideUp();
  }


});
