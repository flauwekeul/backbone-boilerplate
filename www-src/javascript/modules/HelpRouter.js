var _ = require('underscore');
var BaseRouter = require('../base/BaseRouter.js');
var Help = require('./Help.js');
var HelpView = require('./HelpView.js');

var HelpRouter = BaseRouter.extend({

    initialize: function (options) {

    },

    routes: {
        "help": "help"
    },

    help: function () {
        this.showPage("help", function () {
            var help = new Help();
            var view = new HelpView({
                model: help,
                el : '#help'
            });
            view.render();
        });
    }
});

module.exports = HelpRouter;
