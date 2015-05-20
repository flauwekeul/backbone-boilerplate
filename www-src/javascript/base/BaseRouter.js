var Backbone = require('backbone');
var $ = require('jquery');

var BaseRouter = Backbone.Router.extend({

    showPage : function(name,callback) {

        $(".page").removeClass("active-page");

        var page = $("#"+ name);
        if(page.length == 0) {
            page = $('<div id="'+ name +'" class="page"></div>');

            $(".pages").append(page);
        }
        page.addClass("active-page");

        callback();
    }
});

module.exports = BaseRouter;
