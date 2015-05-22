var _ = require('underscore');
var BaseRouter = require('../base/BaseRouter.js');
var Help = require('./Help.js');
var HelpView = require('./HelpView.js');
var LayoutView = require('./layout/LayoutView.js');

var HelpRouter = BaseRouter.extend({

    initialize: function (options) {

    },

    routes: {
        "help": "help"
    },

    help: function () {
        this.showPage("layout", function () {
            var help = new Help();
            var helpView = new HelpView({
                model: help,
                id : "help"
            });

            var view = new LayoutView({
                el : '#layout'
            });
            view.render();

            view.addSubView(helpView);
        });
    }
});

module.exports = HelpRouter;
