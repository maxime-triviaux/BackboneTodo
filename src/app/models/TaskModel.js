//Todo Model
var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('Backbone');


module.exports = Backbone.Model.extend({

  defaults:{
    title: "Titre de la tâche",
    content: "Contenu de la tâche",
    publicationDate: new Date()
  },

  initialize: function() {
    console.log("Création d'une nouvelle tâche !");
  }

});
