var _ = require('underscore');
var Backbone = require('backbone');
var viewTemplate = require('./templates/layoutView.html');

var LayoutView = Backbone.View.extend({

    template: _.template(viewTemplate),
    el: '#layout-content',

    events: {

    },

    initialize: function(options) {
    },
    render: function() {
        this.$el.html(this.template());
    },
    addSubView: function(view) {
        var div = "<div id='"+ view.id +"'></div>";
        this.$el.append(div);

        view.el = this.$el.find('#'+ view.id);
        console.log(view);
        view.render();
        console.log("stuff");

    }
});

module.exports = LayoutView;
