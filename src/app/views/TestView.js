//TestView
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');
var template = require('../templates/test.hbs');

module.exports = Backbone.View.extend({

  el: $("#app"),

  initialize: function(){
    this.render();
  },

  render: function(){
    var compiled = template({});
    $(this.el).html(compiled);
    return this;
  }

});
