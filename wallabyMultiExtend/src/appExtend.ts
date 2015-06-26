import App = require("app");

class AppEx extends App {
    private _el2;

    constructor(el) {
        super(el);
    }

    public sayHello() {
        this._el2.html('hello');
    }
}

export = AppEx;