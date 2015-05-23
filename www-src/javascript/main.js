var Backbone = require('backbone');
var HelpRouter = require('./modules/help/HelpRouter.js');
var StartRouter = require('./modules/start/StartRouter.js');

var App = {
    initialize : function() {

        new StartRouter();
        new HelpRouter();
        Backbone.history.start();
    }
};

App.initialize();
