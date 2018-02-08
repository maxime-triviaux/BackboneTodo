//TodoView
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');

module.exports = Backbone.View.extend({

  el: $("#task-collection-container"),

  initialize: function() {
   this.template = _.template($("#task-collection-template").html());

  _.bindAll(this, 'render');
  this.collection.bind('change', this.render);
  this.collection.bind('add', this.render);
  this.collection.bind('remove', this.render);

  },

  render: function() {
   var renderedContent = this.template({
     tasks: this.collection.toJSON()
   });
   $(this.el).html(renderedContent);
   return this;
  }


});
