var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", "app"], function (require, exports, App) {
    var AppEx = (function (_super) {
        __extends(AppEx, _super);
        function AppEx(el) {
            _super.call(this, el);
        }
        AppEx.prototype.sayHello = function () {
            this._el2.html('hello');
        };
        return AppEx;
    })(App);
    return AppEx;
});
//# sourceMappingURL=appExtend.js.map