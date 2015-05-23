var Backbone = require('backbone');

var Help = Backbone.Model.extend({
    defaults: {
        'content' : 'The cake is a lie'
    },

    initialize : function() {

    }
});

module.exports = Help;
