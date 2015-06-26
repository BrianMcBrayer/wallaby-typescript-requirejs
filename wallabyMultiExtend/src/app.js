define(["require", "exports"], function (require, exports) {
    var App = (function () {
        function App(el) {
            this._el = el;
        }
        App.prototype.render = function () {
            this._el.html('require.js up and running');
        };
        return App;
    })();
    return App;
});
//# sourceMappingURL=app.js.map