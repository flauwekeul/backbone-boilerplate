var _ = require('underscore');
var Backbone = require('backbone');
var viewTemplate = require('./templates/help.html');

var HelpView = Backbone.View.extend({

    template: _.template(viewTemplate),
    el: '#help-content',

    events: {
        'click button': 'buttonPressed'
    },

    initialize: function(options) {
        this.model = options.model;
    },
    render: function() {

        this.$el.html(this.template(this.model.toJSON()));

    },
    buttonPressed: function() {
        alert("Hop!");
    }
});

module.exports = HelpView;
