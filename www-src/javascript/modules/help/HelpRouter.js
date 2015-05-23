var _ = require('underscore');
var BaseRouter = require('../../base/BaseRouter.js');
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
            var helpView = new HelpView({
                model: help,
                id : "help"
            });
            helpView.render();

        });
    }
});

module.exports = HelpRouter;
