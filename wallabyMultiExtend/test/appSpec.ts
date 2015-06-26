import App = require('app');
import $ = require('jquery');
import _ = require('underscore');

describe('just checking', function () {

    it('works for app', function () {
        var el = $('<div></div>');

        var app = new App(el);
        app.render();

        expect(el.text()).toEqual('require.js up and running');
    });

    it('works for underscore', function () {
        // just checking that _ works
        expect(_.size([1, 2, 4])).toEqual(3);
    });

});
