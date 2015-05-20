var html = require('./templates/test.html');
var _ = require('underscore');

var test = {
    'element' : 'hello'
};
var template = _.template(html);

console.log(template(test));
