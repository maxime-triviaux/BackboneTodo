//TodoView
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var template = require('../templates/home.hbs');

module.exports = Backbone.View.extend({

  el: $('#app'),

  initialize: function() {

  },

  render: function() {
    var compiled = template({tasks: window.tasks.toJSON()});
    $(this.el).html(compiled);
    return this;
  }


});
