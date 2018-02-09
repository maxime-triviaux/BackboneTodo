//Todo Model
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');


module.exports = Backbone.Model.extend({

  defaults:{
    id: 1,
    title: "Titre de la tâche",
    content: "Contenu de la tâche",
    publicationDate: new Date()
  },

  initialize: function() {
  }

});
