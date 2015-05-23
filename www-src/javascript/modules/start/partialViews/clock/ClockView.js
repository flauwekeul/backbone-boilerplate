var _ = require('underscore');
var BaseView = require('../../../../base/BaseView');
var viewTemplate = require('./templates/clockView.html');

var ClockView = BaseView.extend({

    template: _.template(viewTemplate),
    el: '#clockTile',

    initialize: function(options) {
        this.model = options.model;
    },
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    }
});

module.exports = ClockView;
