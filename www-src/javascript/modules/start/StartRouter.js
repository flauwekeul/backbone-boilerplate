var _ = require('underscore');
var BaseRouter = require('../../base/BaseRouter.js');
var LayoutView = require('./StartLayoutView.js');

var StartRouter = BaseRouter.extend({

    initialize: function (options) {

    },

    routes: {
        "" : "start",
        "start": "start"
    },

    start: function () {
        this.showPage("start", function () {
            var layoutView = new LayoutView();
            layoutView.render();
        });
    }
});

module.exports = StartRouter;
