var Backbone = require('backbone');
var HelpRouter = require('./modules/HelpRouter.js');

var App = {
    initialize : function() {

        new HelpRouter();
        Backbone.history.start();
    }
};

App.initialize();
