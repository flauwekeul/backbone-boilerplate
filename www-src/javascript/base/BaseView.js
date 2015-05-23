var _ = require('underscore');
var Backbone = require('backbone');

var BaseView = Backbone.View.extend({

    template: null,
    el: null,

    events: {

    },

    initialize: function() {

    },
    render: function() {

    },
    assign: function (selector, view) {
        var selectors;
        if (!selector) {
            return;
        }

        if (_.isObject(selector)) {
            selectors = selector;
        }
        else {
            selectors = {};
            selectors[selector] = view;
        }

        _.each(selectors, function (view, selector) {
            view.setElement(this.$(selector)).render();
        }, this);
    },
});

module.exports = BaseView;
