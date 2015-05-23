var Backbone = require('backbone');

var Clock = Backbone.Model.extend({
    defaults: {
        'content' : '11:11:11'
    },

    initialize : function() {

    }
});

module.exports = Clock;
