import AppEx = require('appExtend');
import $ = require('jquery');
import _ = require('underscore');

describe('just checking', function () {

    it('works for appEx', function () {
        var el = $('<div></div>');

        var app = new AppEx(el);
        app.sayHello();

        expect(el.text()).toEqual('require.js up and running');
    });

});
