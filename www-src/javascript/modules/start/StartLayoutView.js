var _ = require('underscore');
var BaseView = require('../../base/BaseView.js');
var layoutTemplate = require('./templates/layout.html');

var Clock = require('./partialViews/clock/Clock.js');
var ClockView = require('./partialViews/clock/ClockView.js');

var StartLayoutView = BaseView.extend({

    template: _.template(layoutTemplate),
    el: '#start',

    events: {

    },

    initialize : function() {
        var clock = new Clock();
        this.clockView = new ClockView({model:clock});
    },
    render: function() {
        this.$el.html(this.template());

        this.assign({
            '#clockTile' : this.clockView
        });
    }
});

module.exports = StartLayoutView;
