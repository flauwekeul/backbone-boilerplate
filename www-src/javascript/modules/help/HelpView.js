var _ = require('underscore');
var BaseView = require('../../base/BaseView.js');
var viewTemplate = require('./templates/help.html');

var HelpView = BaseView.extend({

    template: _.template(viewTemplate),
    el: '#help',

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
